import { useDispatch, useSelector } from "react-redux";
import { changeShow, changemodalStep } from "../store/webSlice";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import TableComp from "../components/Table";
import { setCourseData } from "../store/dashboardSlice";
import { useQuery } from "@tanstack/react-query";
import { addCourseByAuthorAxios } from "../helpers/axiosApi";
import { useState } from "react";

function Courses() {
  const {
    data: addedCourse = [],
    isPending,
    isError,
  } = useQuery({
    // staleTime: 1000 * 10,
    queryKey: ["addedCourse"],
    queryFn: async () => {
      const response = await addCourseByAuthorAxios();
      if (response.code !== 200) {
        return [];
      }
      return response.data;
    },
  });
  const dispatch = useDispatch();

  const handleEditClick = (course) => {
    dispatch(setCourseData(course));
    dispatch(changeShow(true));
    dispatch(changemodalStep(9));
  };

  const handleAddCourse = () => {
    dispatch(changeShow(true));
    dispatch(changemodalStep(5));
  };

  const styles = {
    textAlign: "left",
    background: "transparent",
  };

  const tableObj = {
    data: addedCourse || [],
    fieldsToExclude: ["files", "courseId", "testId", "shortDesc"],
    styles,
    action: <span className="text-secondaryDark underline">View Detail</span>,
    clickAction: handleEditClick,
  };
  return (
    <div className="pt-1 pb-0 h-full overflow-y-scroll">
      <p className="text-xl text-center text-secondaryDark font-bold mb-4">
        Added Courses
      </p>
      {isPending ? <>Loading...</> : ""}
      {addedCourse?.length === 0 ? (
        <div className="w-full m-auto justify-center h-4/5 flex items-center ">
          <div className="flex flex-row ml-2 justify-center items-center">
            <p className="text-lg items-center">
              <SentimentVeryDissatisfiedIcon
                className="mr-2"
                fontSize="medium"
              />{" "}
              Oops! You have not added any course yet
            </p>
            <button
              className="ml-3 border-1 border-secondaryDark bg-secondaryLight rounded-full text-white py-2 px-4"
              onClick={handleAddCourse}
            >
              Add Now
            </button>
          </div>
        </div>
      ) : (
        <TableComp className="h-full" tableObj={tableObj} />
      )}
    </div>
  );
}

export default Courses;
