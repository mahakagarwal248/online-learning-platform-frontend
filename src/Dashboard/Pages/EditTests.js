import { useLocation } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import DeleteWarning from "../Screens/DeleteWarning";
import { useDispatch } from "react-redux";
import { changeShow } from "../../store/webSlice";
import TableComp from "../../components/Table";
function EditTests() {
  const [showWarning, setShowWarning] = useState(false);
  const location = useLocation();
  const test = location.state;

  const dispatch = useDispatch();

  const handleDelete = () => {
    setShowWarning(true);
    dispatch(changeShow(true));
  };

  const styles = {
    textAlign: "left",
    background: "transparent",
  };

  const handleEditClick = () => {};
  const tableObj = {
    data: [test],
    fieldsToExclude: ["files", "questions", "actions"],
    styles,
    action: <span className="text-secondaryDark underline">View Detail</span>,
    clickAction: handleEditClick,
  };

  return (
    <div className="w-4/5 m-auto flex flex-col justify-center pt-5">
      <p className="text-3xl m-auto text-secondaryDark font-semibold mb-5">
        Details of the test
      </p>
      {/* <div className="flex flex-row w-full m-auto justify-center pt-5">
        <div className="mr-8">
          <p className="text-lg font-bold mb-3">Test Id</p>
          <p className="text-lg font-bold mb-3">Course Name</p>
          <p className="text-lg font-bold mb-3">Course Id</p>
          <p className="text-lg font-bold mb-3">Added On</p>
          <p className="text-lg font-bold mb-3">Duration</p>
          <p className="text-lg font-bold mb-3">Questions</p>
        </div>
        <div className="ml-8">
          <p className="text-lg mb-3">{test.testId}</p>
          <p className="text-lg mb-3">{test.courseName}</p>
          <p className="text-lg mb-3">{test.courseId}</p>
          <p className="text-lg mb-3">{test.addedOn}</p>
          <p className="text-lg mb-3">{test.duration}</p>
          <div className="text-lg mb-3">
            {test?.questions?.length > 0 &&
              test?.questions?.map((obj, index) => {
                return (
                  <div key={index} className="mb-3">
                    <span className="text-lg font-semibold">
                      <ArrowForwardIcon className="text-primaryLight" />{" "}
                      {obj?.question}
                    </span>
                    <div>
                      <span className="text-sm font-semibold">Options : </span>
                      <span className="text-sm">(1) {obj.optionA} </span>
                      <span className="text-sm">(2) {obj.optionB} </span>
                      <span className="text-sm">(3) {obj.optionC} </span>
                      <span className="text-sm">(4) {obj.optionD} </span>
                    </div>
                    <span className="text-sm">
                      Correct Answer : <b>{obj[obj.correctAnswer]}</b>
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div> */}
      <TableComp tableObj={tableObj}></TableComp>
      <p className="text-md font-bold mb-3">Questions</p>
      <div className="mb-3">
        {test?.questions?.length > 0 &&
          test?.questions?.map((obj, index) => {
            return (
              <div key={index} className="mb-3">
                <span className="text-md font-semibold">
                  <ArrowForwardIcon className="text-primaryLight" />{" "}
                  {obj?.question}
                </span>
                <div>
                  <span className="text-sm font-semibold">Options : </span>
                  {Object.keys(obj)
                    .filter(
                      (key) =>
                        key !== "question" &&
                        key !== "correctAnswer" &&
                        key !== "chosenAnswer"
                    )
                    ?.map((option, idx) => {
                      return (
                        <span className="text-sm">
                          ({idx + 1}) {obj[option]} &nbsp; &nbsp;
                        </span>
                      );
                    })}
                </div>
                <span className="text-sm">
                  Correct Answer : <b>{obj[obj.correctAnswer]}</b>
                </span>
              </div>
            );
          })}
      </div>
      <button
        onClick={handleDelete}
        className="border-0 bg-red-500 text-white m-auto mt-4 mb-5 px-4 py-2"
      >
        Delete this test
      </button>
      {showWarning && (
        <DeleteWarning
          className="z-10"
          setShowWarning={setShowWarning}
        ></DeleteWarning>
      )}
    </div>
  );
}

export default EditTests;
