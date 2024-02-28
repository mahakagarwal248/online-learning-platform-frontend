import { useDispatch } from "react-redux";
import { changeShow } from "../store/webSlice";
import { setTestDetails } from "../store/testSlice";
import ViewTest from "../components/Screens/MyTests/ViewTest";
import { useState } from "react";

const testDetails = [
  {
    submittedOn: "16-12-2023",
    testDetails: {
      testId: 101,
      questions: [
        {
          question: "Question 1",
          optionA: "Option 1",
          optionB: "Option 2",
          optionC: "Option 3",
          optionD: "Option 4",
          correctAnswer: "optionA",
          chosenAnswer: "optionA",
        },
        {
          question: "Question 2",
          optionA: "Option 1",
          optionB: "Option 2",
          optionC: "Option 3",
          optionD: "Option 4",
          correctAnswer: "optionB",
          chosenAnswer: "optionB",
        },
        {
          question: "Question 3",
          optionA: "Option 1",
          optionB: "Option 2",
          optionC: "Option 3",
          optionD: "Option 4",
          correctAnswer: "optionC",
          chosenAnswer: "optionC",
        },
        {
          question: "Question 4",
          optionA: "Option 1",
          optionB: "Option 2",
          optionC: "Option 3",
          optionD: "Option 4",
          correctAnswer: "optionD",
          chosenAnswer: "optionB",
        },
        {
          question: "Question 4",
          optionA: "Option 1",
          optionB: "Option 2",
          optionC: "Option 3",
          optionD: "Option 4",
          correctAnswer: "optionB",
          chosenAnswer: "optionA",
        },
        {
          question: "Question 4",
          optionA: "Option 1",
          optionB: "Option 2",
          optionC: "Option 3",
          optionD: "Option 4",
          correctAnswer: "optionA",
          chosenAnswer: "optionC",
        },
      ],
    },
  },
  {
    submittedOn: "16-12-2023",
    testDetails: {
      testId: 201,
      questions: [
        {
          question: "Question 1",
          optionA: "Option 1",
          optionB: "Option 2",
          optionC: "Option 3",
          optionD: "Option 4",
          correctAnswer: "optionA",
          chosenAnswer: "optionB",
        },
        {
          question: "Question 2",
          optionA: "Option 1",
          optionB: "Option 2",
          optionC: "Option 3",
          optionD: "Option 4",
          correctAnswer: "optionC",
          chosenAnswer: "optionB",
        },
        {
          question: "Question 3",
          optionA: "Option 1",
          optionB: "Option 2",
          optionC: "Option 3",
          optionD: "Option 4",
          correctAnswer: "optionD",
          chosenAnswer: "optionD",
        },
        {
          question: "Question 4",
          optionA: "Option 1",
          optionB: "Option 2",
          optionC: "Option 3",
          optionD: "Option 4",
          correctAnswer: "optionB",
          chosenAnswer: "optionA",
        },
      ],
    },
  },
];

function MyTests() {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const handleViewClick = (testDetails) => {
    setShow(true);
    dispatch(changeShow(true));
    dispatch(setTestDetails(testDetails));
  };
  return show ? (
    <ViewTest setShow={setShow} />
  ) : (
    <>
      <div className="w-4/5 m-auto pt-5">
        <div>
          {testDetails && testDetails.length > 0 ? (
            testDetails.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row my-2 border-1 border-black w-96 m-auto p-3 mt-4 shadow-allSide"
                >
                  <div>
                    <p>
                      <strong>Test ID:</strong> {item?.testDetails?.testId}
                    </p>
                    <p>
                      <strong>Submitted On:</strong> {item?.submittedOn}
                    </p>
                  </div>
                  <button
                    onClick={() => handleViewClick(item?.testDetails)}
                    className="bg-secondaryExtraLight px-4 py-1 ml-auto"
                  >
                    View Answers
                  </button>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default MyTests;
