import { useDispatch, useSelector } from "react-redux";

import ModalComp from "../../Modals/Modal";
import { changeShow } from "../../../store/webSlice";
import { setTestDetails } from "../../../store/testSlice";
import { useState } from "react";

function ViewTest({ setShow }) {
  const { testDetails } = useSelector((state) => state.test);
  const [correctCount, setCorrectCount] = useState(0);
  const [countUpdated, setCountUpdated] = useState(false);

  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
    dispatch(changeShow(false));
    dispatch(setTestDetails({}));
  };
  const styleData = {
    width: "60%",
    height: "80vh",
    closeButtonText: "Close",
    background: "bg-white",
    transition: "transform origin-right-top transition duration-1000",
    handleClose: handleClose,
  };
  const changeCorrectCount = () => {
    if (!countUpdated) {
      setCorrectCount((prevCount) => prevCount + 1);
      setCountUpdated(true);
    }
  };
  const bgColor = (question, option) => {
    let color;
    if (
      question.correctAnswer === question.chosenAnswer &&
      question.correctAnswer === option
    ) {
      color = "bg-green-400";
      changeCorrectCount();
    } else if (question.correctAnswer === option) {
      color = "bg-green-400";
    } else if (
      question.chosenAnswer === option &&
      question.chosenAnswer !== question.correctAnswer
    ) {
      color = "bg-red-500";
    } else {
      color = "bg-white";
    }
    return color;
  };
  return (
    <div>
      <ModalComp styles={styleData}>
        <p className="text-xl font-bold mb-3">
          Score: {correctCount}/{testDetails?.questions?.length}
        </p>
        <div className="px-2 pb-2 h-[90%] overflow-y-scroll">
          {testDetails?.questions?.map((question, index) => {
            return (
              <div key={index}>
                <p className="text-lg font-semibold my-1">
                  {index + 1}. {question?.question}
                </p>
                {Object.keys(question)
                  .filter(
                    (key) =>
                      key !== "question" &&
                      key !== "correctAnswer" &&
                      key !== "chosenAnswer"
                  )
                  ?.map((item, idx) => {
                    return (
                      <div key={idx} className="flex flex-row items-center">
                        <div
                          type="radio"
                          className={`h-3 w-3 rounded-full border-1 border-black ${bgColor(
                            question,
                            item
                          )}`}
                        ></div>
                        <label className="ml-3">{question[item]}</label>
                        <br />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </ModalComp>
    </div>
  );
}

export default ViewTest;
