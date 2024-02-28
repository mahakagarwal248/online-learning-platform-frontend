import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import ModalComp from "../../components/Modals/Modal";
import Input from "../../components/Input/Input";
import { changeShow, changemodalStep } from "../../store/webSlice";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCourseAxios } from "../../helpers/axiosApi";
import fileUploadOperations from "../../helpers/MultipleFileUpload";

function AddCourse() {
  const queryClient = useQueryClient();
  const {
    user: { id: userId },
  } = useSelector((data) => data.user);
  const [isEditable, setIsEditable] = useState(false);
  const [newFile, setNewFile] = useState();
  const [newFilesArr, setNewFilesArr] = useState([]);

  const [addCourseData, setAddCourseData] = useState({
    name: "",
    author: userId,
    description: "",
    level: "",
    category: "",
    duration: "",
    startDate: "01-01-2024",
    files: [],
  });
  // eslint-disable-next-line no-unused-vars
  const { mutate, variables } = useMutation({
    mutationFn: async (data) => {
      return await addCourseAxios(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addedCourse"] });
    },
  });
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(changeShow(false));
    dispatch(changemodalStep(0));
  };

  const handleSubmit = () => {
    mutate(addCourseData);
    dispatch(changeShow(false));
    dispatch(changemodalStep(0));
  };
  const styleData = {
    width: "420px",
    height: "550px",
    buttonText: "Add",
    closeButtonText: "Cancel",
    background: "bg-secondaryExtraLight",
    transition: "transform origin-right-top transition duration-1000",
    handleClose: handleClose,
    handleSubmit: handleSubmit,
  };
  const handleOnchange = (e, field) => {
    e.preventDefault();
    setAddCourseData({ ...addCourseData, [field]: e.target.value });
  };

  const editClick = () => {
    setIsEditable(true);
  };

  const handleFileOperations = (filename, operation) => {
    fileUploadOperations({
      filename,
      newFile,
      setNewFile,
      newFilesArr,
      setNewFilesArr,
      setIsEditable,
      setAddCourseData,
      operation,
    });
  };
  return (
    <div>
      <ModalComp styles={styleData}>
        <div className="w-4/5 text-center m-auto">
          <p className="text-3xl mt-3 mb-4">Add Course</p>
          <Input
            value={addCourseData.name}
            onChange={(e) => handleOnchange(e, "name")}
            title={"Course Name"}
          />
          <Input
            value={addCourseData.description}
            title={"Description"}
            onChange={(e) => handleOnchange(e, "description")}
          />
          <Input
            value={addCourseData.duration}
            onChange={(e) => {
              handleOnchange(e, "duration");
            }}
            type="number"
            title={"Duration (In Days)"}
          />
          <select
            id="courselevel"
            className="border-b-2 border-primaryLight bg-transparent pb-1 mb-3 w-full"
            value={addCourseData.level}
            onChange={(e) => {
              handleOnchange(e, "level");
            }}
          >
            <option hidden className="text-primaryDark">
              Difficulty Level
            </option>
            <option
              htmlFor="courselevel"
              value={"E"}
              className="text-primaryLight"
            >
              Beginner
            </option>
            <option
              htmlFor="courselevel"
              value={"M"}
              className="text-primaryLight"
            >
              Intermediate
            </option>
            <option
              htmlFor="courselevel"
              value={"H"}
              className="text-primaryLight"
            >
              Expert
            </option>
          </select>
          <Input
            value={addCourseData.category}
            onChange={(e) => {
              handleOnchange(e, "category");
            }}
            title={"Category"}
          />
          <p className="mb-2 text-left font-semibold">
            Upload course content :-
          </p>
          {Array.isArray(newFilesArr) && newFilesArr.length > 0 && (
            <div className="max-h-20 overflow-y-auto">
              {newFilesArr.map((item, index) => {
                return (
                  <div key={index} className="mb-2 flex flex-row items-center">
                    <ArrowForwardIcon className="mr-2 text-secondaryDark" />
                    <p className="text-left text-sm">
                      Chapter {index + 1} :- {item}
                    </p>
                    <img
                      src="/assets/cross.png"
                      alt="Delete"
                      className="w-4 h-4 cursor-pointer ml-auto"
                      onClick={() => handleFileOperations(item, "delete")}
                    />
                  </div>
                );
              })}
            </div>
          )}
          {(isEditable || newFilesArr.length === 0) && (
            <>
              <p className="mt-2 mb-1 text-left font-semibold text-sm">
                Chapter {newFilesArr.length + 1} :-
              </p>
              <div className="flex flex-row mb-3">
                <input
                  type="file"
                  onChange={(e) => setNewFile(e.target.value)}
                  className="border-1 border-black w-56 text-sm"
                ></input>
                <button
                  onClick={() => handleFileOperations("", "save")}
                  className="ml-2 underline"
                >
                  Save
                </button>
                {newFilesArr.length > 0 && (
                  <button
                    onClick={() => handleFileOperations("", "cancel")}
                    className="ml-2 underline"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </>
          )}
          <div className="text-left mt-3">
            <button
              onClick={editClick}
              className="border-1 border-black py-1 rounded-full bg-secondaryLight text-white w-28"
            >
              Add More
            </button>
          </div>
        </div>
      </ModalComp>
    </div>
  );
}

export default AddCourse;
