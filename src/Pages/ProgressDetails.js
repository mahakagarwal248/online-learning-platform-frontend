import { useLocation } from "react-router-dom";
import { learnerId } from "../Constants";

function ProgressDetails() {
  const location = useLocation();
  const item = location.state;

  const handleTakeTest = (item) => {
    window.open(
      `/${learnerId}/take-test/${item?.testDetails?.testId}`,
      "_blank",
      "height=" + window.outerHeight + ", width=" + window.outerWidth,
      "rel=noopener noreferrer"
    );
  };
  return (
    <div className="w-4/5 m-auto pt-5">
      <div className="flex flex-row flex-wrap items-center">
        <p className="font-bold text-2xl">{item?.courseDetails?.title}</p>
        {item?.currentChapter === 0 ? (
          <p className="ml-8 bg-secondaryDark text-white px-3 py-1">
            {item?.isTestTaken === false
              ? "Learning Completed"
              : "Course Completed"}
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className="my-4">
        {item?.courseDetails?.files?.map((file, index) => {
          return (
            <div key={index} className="flex flex-row items-center">
              <p className="my-1 text-md cursor-pointer">
                <b>Chapter {index + 1} :</b> {file}
              </p>
              {item.currentChapter >= index + 2 || item.currentChapter === 0 ? (
                <img
                  className="ml-5 h-5 w-5"
                  src="/assets/completed.png"
                  alt="completed"
                />
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
      {item?.currentChapter === 0 &&
        item?.testDetails?.isCompleted === false && (
          <button
            onClick={() => handleTakeTest(item)}
            className="bg-secondaryExtraLight px-4 py-2 border-3 border-secondaryDark mt-3"
          >
            Take Test
          </button>
        )}
    </div>
  );
}

export default ProgressDetails;
