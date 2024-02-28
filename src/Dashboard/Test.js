import { useDispatch } from "react-redux";
import { changeShow, changemodalStep } from "../store/webSlice";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import TableComp from "../components/Table";
import { setTestData } from "../store/dashboardSlice";

const addedTests = [
  {
    testId: 101,
    courseName: "course Name",
    courseId: 1,
    duration: "30 mins",
    addedOn: "04-10-2001",
    files: "https://www.google.com",
    questions: [
      {
        question: "Question 1",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionB",
      },
      {
        question: "Question 2",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionA",
      },
      {
        question: "Question 3",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionC",
      },
      {
        question: "Question 4",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionD",
      },
    ],
  },
  {
    testId: 201,
    courseName: "course Name",
    courseId: 1,
    duration: "30 mins",
    addedOn: "04-10-2001",
    files: "https://www.google.com",
    questions: [
      {
        question: "Question 1",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionB",
      },
      {
        question: "Question 2",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionA",
      },
      {
        question: "Question 3",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionC",
      },
      {
        question: "Question 4",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionD",
      },
    ],
  },
  {
    testId: 301,
    courseName: "course Name",
    courseId: 1,
    duration: "30 mins",
    addedOn: "04-10-2001",
    files: "https://www.google.com",
    questions: [
      {
        question: "Question 1",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionB",
      },
      {
        question: "Question 2",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionA",
      },
      {
        question: "Question 3",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionC",
      },
      {
        question: "Question 4",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionD",
      },
    ],
  },
  {
    testId: 401,
    courseName: "course Name",
    courseId: 1,
    duration: "30 mins",
    addedOn: "04-10-2001",
    files: "https://www.google.com",
    questions: [
      {
        question: "Question 1",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionB",
      },
      {
        question: "Question 2",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionA",
      },
      {
        question: "Question 3",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionC",
      },
      {
        question: "Question 4",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionD",
      },
    ],
  },
  {
    testId: 501,
    courseName: "course Name",
    courseId: 1,
    duration: "30 mins",
    addedOn: "04-10-2001",
    files: "https://www.google.com",
    questions: [
      {
        question: "Question 1",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionB",
      },
      {
        question: "Question 2",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionA",
      },
      {
        question: "Question 3",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionC",
      },
      {
        question: "Question 4",
        optionA: "Option 1",
        optionB: "Option 2",
        optionC: "Option 3",
        optionD: "Option 4",
        correctAnswer: "optionD",
      },
    ],
  },
];
function Tests() {
  const dispatch = useDispatch();

  const handleEditClick = (test) => {
    dispatch(setTestData(test));
    dispatch(changeShow(true));
    dispatch(changemodalStep(8));
  };

  const handleAddTest = () => {
    dispatch(changeShow(true));
    dispatch(changemodalStep(6));
  };

  const styles = {
    textAlign: "left",
    background: "transparent",
  };

  const tableObj = {
    data: addedTests,
    fieldsToExclude: ["files", "courseId", "questions", "testId"],
    styles,
    action: <span className="text-secondaryDark underline">View Detail</span>,
    clickAction: handleEditClick,
  };
  return (
    <div className="pt-1 pb-0 h-full overflow-y-scroll">
      <p className="text-xl text-center text-secondaryDark font-bold mb-4">
        Added Tests
      </p>
      {addedTests.length === 0 ? (
        <div className="w-full m-auto justify-center h-4/5 flex items-center ">
          <div className="flex flex-row ml-2 justify-center items-center">
            <p className="text-lg items-center">
              <SentimentVeryDissatisfiedIcon
                className="mr-2"
                fontSize="medium"
              />{" "}
              Oops! You have not added any tests yet
            </p>
            <button
              className="ml-3 border-1 border-secondaryDark bg-secondaryLight rounded-full text-white py-2 px-4"
              onClick={handleAddTest}
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

export default Tests;
