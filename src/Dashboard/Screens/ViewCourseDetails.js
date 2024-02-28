import { useDispatch, useSelector } from "react-redux";

import ModalComp from "../../components/Modals/Modal";
import TableComp from "../../components/Table";
import { changeShow, changemodalStep } from "../../store/webSlice";
import { useNavigate } from "react-router";
import { useState } from "react";
import DeleteWarning from "./DeleteWarning";

function ViewCourseDetails() {
  const { courseData } = useSelector((state) => state.dashboard);
  const [showWarning, setShowWarning] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBack = () => {
    dispatch(changeShow(false));
    dispatch(changemodalStep(0));
  };

  const handleEdit = () => {
    dispatch(changeShow(false));
    dispatch(changemodalStep(0));
    navigate("/dashboard/edit-course", { state: courseData });
  };

  const handleDelete = () => {
    setShowWarning(true);
  };

  const styleData = {
    width: "98%",
    height: "95%",
    buttonText: "Edit",
    button2Text: "Delete",
    closeButtonText: "Back",
    background: "bg-secondaryExtraLight",
    transition: "transform origin-right-top transition duration-1000",
    handleClose: handleBack,
    handleSubmit: handleEdit,
    handleSubmit2: handleDelete,
  };

  const styles = {
    textAlign: "left",
    background: "transparent",
  };

  const tableObj = {
    data: [courseData],
    fieldsToExclude: ["files", "courseId", "testId", "actions"],
    styles,
  };
  return (
    <div>
      <ModalComp styles={styleData}>
        <div className="bg-primaryDark w-full my-4 text-white pl-6 py-3 text-xl">
          Added Course
        </div>
        <div className="w-[95%] m-auto">
          <p className="text-lg text-primaryLight font-semibold">
            Course Details
          </p>
          <TableComp tableObj={tableObj} />
          <div className="h-2/5 pl-2">
            <p className="text-md font-bold mb-2">Files</p>
            <div className="h-[90%] overflow-y-auto">
              {courseData.files &&
                courseData.files.map((item, index) => {
                  return (
                    <p key={index} className="cursor-pointer">
                      {item}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
      </ModalComp>
      {showWarning && (
        <DeleteWarning
          setShowWarning={setShowWarning}
          content={"course"}
          className="z-10"
        />
      )}
    </div>
  );
}

export default ViewCourseDetails;
