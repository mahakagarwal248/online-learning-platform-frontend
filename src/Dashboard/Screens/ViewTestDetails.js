import { useDispatch, useSelector } from "react-redux";

import ModalComp from "../../components/Modals/Modal";
import TableComp from "../../components/Table";
import { changeShow, changemodalStep } from "../../store/webSlice";
import { useNavigate } from "react-router";
import AccordionComp from "../../components/Accordion/Accordion";
import { useState } from "react";
import DeleteWarning from "./DeleteWarning";

function ViewTestDetails() {
  const { testData } = useSelector((state) => state.dashboard);
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
    navigate("/dashboard/edit-test", { state: testData });
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
    background: "bg-grey-100",
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
    data: [testData],
    fieldsToExclude: ["files", "courseId", "questions", "actions"],
    styles,
  };
  return (
    <div>
      <ModalComp styles={styleData}>
        <div className="bg-primaryDark w-full my-4 text-white pl-6 py-3 text-xl">
          Added Test
        </div>
        <div className="w-[95%] m-auto">
          <p className="text-lg text-primaryLight font-semibold">
            Test Details
          </p>
          <TableComp tableObj={tableObj} />
          <div className="h-2/5 pl-2">
            <p className="text-md font-bold mb-2">Questions</p>
            <div className="h-[90%] overflow-y-auto">
              {testData.questions &&
                testData.questions.map((item, index) => {
                  return (
                    <AccordionComp
                      key={index}
                      index={index}
                      heading={item?.question}
                    >
                      {Object.keys(item)
                        .filter(
                          (key) =>
                            key !== "question" &&
                            key !== "correctAnswer" &&
                            key !== "chosenAnswer"
                        )
                        ?.map((option, idx) => {
                          return (
                            <p key={idx}>
                              ({idx + 1}) {item[option]}
                            </p>
                          );
                        })}
                      <p className="mt-1">
                        Correct Answer: <b>{item?.correctAnswer}</b>
                      </p>
                    </AccordionComp>
                  );
                })}
            </div>
          </div>
        </div>
      </ModalComp>
      {showWarning && (
        <DeleteWarning
          setShowWarning={setShowWarning}
          content={"test"}
          className="z-10"
        />
      )}
    </div>
  );
}

export default ViewTestDetails;
