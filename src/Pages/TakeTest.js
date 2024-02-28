import { useState, useEffect } from "react";
import MyTimer from "../components/Timer";

const testData = {
  testId: 101,
  questions: [
    {
      question: "Question 1",
      optionA: "Option 1",
      optionB: "Option 2",
      optionC: "Option 3",
      optionD: "Option 4",
    },
    {
      question: "Question 2",
      optionA: "Option 1",
      optionB: "Option 2",
      optionC: "Option 3",
      optionD: "Option 4",
    },
    {
      question: "Question 3",
      optionA: "Option 1",
      optionB: "Option 2",
      optionC: "Option 3",
      optionD: "Option 4",
    },
    {
      question: "Question 4",
      optionA: "Option 1",
      optionB: "Option 2",
      optionC: "Option 3",
      optionD: "Option 4",
    },
  ],
};
function TakeTest() {
  const [switchCount, setSwitchCount] = useState(0);

  const handleSubmitClick = () => {
    window.alert("Test submitted successfully");
    window.close();
  };
  useEffect(() => {
    const handleFullScreenChange = (event) => {
      if (!document.webkitIsFullScreen) {
        if (
          window.confirm(
            "If you exit, the test will be ended automatically. "
          ) === true
        ) {
          handleSubmitClick();
        }
      }
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (switchCount === 0) {
          window.alert(
            "If you switch your tab again, the test will end automatically"
          );
          setSwitchCount(1); // Set switchCount to 1 to ensure the alert won't trigger again
        } else {
          handleSubmitClick();
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [switchCount]);

  const handleNoClick = () => {
    window.close();
  };
  const handleYesClick = () => {
    document.documentElement.requestFullscreen();
    setIsReady(true);
  };

  const duration = "2 mins";
  const splitDuration = duration.split(" ");
  let secToAdd;
  splitDuration[1] === "mins"
    ? (secToAdd = splitDuration[0] * 60)
    : (secToAdd = splitDuration[0] * 60 * 60);
  const time = new Date();
  time.setSeconds(time.getSeconds() + secToAdd); // 10 minutes timer
  const [isReady, setIsReady] = useState(false);
  return isReady ? (
    <div className="w-4/5 m-auto text-center pt-5">
      <div>
        <MyTimer expiryTimestamp={time} submitAction={handleSubmitClick} />
      </div>
      <div className="text-left">
        {testData &&
          testData?.questions?.length > 0 &&
          testData?.questions?.map((question, index) => {
            return (
              <div key={index}>
                <p className="text-lg font-bold my-1">
                  {index + 1}. {question?.question}
                </p>
                {Object.keys(question)
                  .filter(
                    (key) =>
                      key !== "question" &&
                      key !== "correctAnswer" &&
                      key !== "chosenAnswer"
                  )
                  ?.map((option, idx) => {
                    console.log(option);
                    return (
                      <div key={idx}>
                        <input type="radio" />
                        <label className="ml-3">{question[option]}</label>
                        <br />
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
      <button
        onClick={handleSubmitClick}
        className="bg-secondaryLight px-4 text-white py-2 rounded-md mt-5"
      >
        Submit
      </button>
    </div>
  ) : (
    <div className="flex flex-col items-center h-screen">
      <div className="mt-16">
        <p className="text-3xl">Are you ready to start?</p>
        <div className="flex flex-row justify-evenly mt-8">
          <button
            onClick={handleYesClick}
            className="bg-green-400 px-5 py-1 text-xl"
          >
            Yes
          </button>
          <button
            onClick={handleNoClick}
            className="bg-red-500 px-5 py-1 text-xl"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default TakeTest;
