import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VisibilityIcon from "@mui/icons-material/Visibility";

import DeleteWarning from "../Screens/DeleteWarning";
import { changeShow } from "../../store/webSlice";

const testData = [
  {
    chapterName: "Chapter 1",
    testFile: "test.pdf",
  },
];
function EditCourse() {
  const location = useLocation();
  const course = location.state;

  const dispatch = useDispatch();

  const fileInputRef = useRef(null);

  const [showWarning, setShowWarning] = useState(false);
  const [testArr, setTestArr] = useState(testData || []);

  const handleDelete = () => {
    setShowWarning(true);
    dispatch(changeShow(true));
  };

  const onUpdateClick = () => {
    const updatedData = { ...course, tests: testArr };
    console.log(updatedData);
  };

  const triggerFileInput = (chapterName) => {
    if (!fileInputRef.current) {
      fileInputRef.current = document.createElement("input");
      fileInputRef.current.type = "file";
      fileInputRef.current.style.display = "none";
      fileInputRef.current.addEventListener("change", (e) =>
        handleFile(e, chapterName)
      );
      document.body.appendChild(fileInputRef.current);
    }
    fileInputRef?.current?.click();
  };

  const handleFile = async (e, chapterName) => {
    e.preventDefault();
    setTestArr([...testArr, { chapterName, testFile: e.target.value }]);
    fileInputRef.current = null;
  };

  console.log(testArr);
  return (
    <div className="w-4/5 m-auto flex flex-col justify-center pt-5">
      <p className="text-3xl m-auto text-secondaryDark font-semibold">
        Details of the Course
      </p>
      <div className="flex flex-row m-auto justify-center pt-5 w-full">
        <div className="mr-6">
          <p className="text-xl font-bold mb-3">Course Title</p>
          <p className="text-xl font-bold mb-3">Short Description</p>
          <p className="text-xl font-bold mb-3">Added On</p>
          <p className="text-xl font-bold mb-3">Duration</p>
          <p className="text-xl font-bold mb-3">Files</p>
        </div>
        <div className="ml-6">
          <p className="text-lg mb-3">{course.title}</p>
          <p className="text-lg mb-3">{course.shortDesc}</p>
          <p className="text-lg mb-3">{course.addedOn}</p>
          <p className="text-lg mb-3">{course.duration} Days</p>
          <div>
            {course?.files?.length > 0 && (
              <div>
                {course?.files?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="mb-3 flex flex-row items-center"
                    >
                      <ArrowForwardIcon className="mr-2 text-secondaryDark" />
                      <p>Chapter {index + 1}</p>
                      <VisibilityIcon className="text-sm text-gray-500 ml-2 cursor-pointer" />
                      {testArr.length > 0 &&
                      testArr.some(
                        (item) => item.chapterName === `Chapter ${index + 1}`
                      ) ? (
                        <button className="ml-5 bg-green-400 w-28 py-1 rounded-full text-xs">
                          View Added Test
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={() =>
                              triggerFileInput(`Chapter ${index + 1}`)
                            }
                            className="ml-5 bg-secondaryLight w-28 py-1 rounded-full text-xs text-white"
                          >
                            Add Test
                          </button>
                        </>
                      )}
                    </div>
                  );
                })}
                {testArr.some((item) => item.chapterName === "overall") ? (
                  <button className="bg-green-400 text-sm rounded-full px-3 py-1 mt-3">
                    View Added Overall Test
                  </button>
                ) : (
                  <button
                    onClick={() => triggerFileInput("overall")}
                    className="bg-secondaryLight text-sm rounded-full px-3 py-1 mt-3 text-white"
                  >
                    Add An Overall Test
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex- flex-row text-center w-full m-auto mt-2">
        <button
          onClick={onUpdateClick}
          className="border-0 bg-secondaryExtraLight mt-4 mb-5 py-2 w-40 mr-3 rounded-large font-semibold"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="border-0 bg-red-500 text-white mt-4 mb-5 px-2 py-2 w-40 ml-3 rounded-large"
        >
          Delete this Course
        </button>
      </div>

      {showWarning && (
        <DeleteWarning
          className="z-10"
          setShowWarning={setShowWarning}
        ></DeleteWarning>
      )}
    </div>
  );
}

export default EditCourse;
