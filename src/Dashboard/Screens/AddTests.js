import { useDispatch } from "react-redux";
import ModalComp from "../../components/Modals/Modal";
import Input from "../../components/Input/Input";
import { changeShow, changemodalStep } from "../../store/webSlice";

const courseNames = ["test", "bhomick test"];
const chapterNames = ["Chapter 1", "Chapter 2"];
function AddTest() {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(changeShow(false));
    dispatch(changemodalStep(0));
  };

  const handleSubmit = () => {
    dispatch(changeShow(false));
    dispatch(changemodalStep(0));
  };
  const styleData = {
    width: "400px",
    height: "400px",
    buttonText: "Add",
    closeButtonText: "Cancel",
    background: "bg-secondaryExtraLight",
    transition: "transform origin-right-top transition duration-1000",
    handleClose: handleClose,
    handleSubmit: handleSubmit,
  };
  return (
    <div>
      <ModalComp styles={styleData}>
        <div className="w-4/5 text-center m-auto">
          <p className="text-3xl mt-3 mb-4">Add Test</p>
          <Input title={"Test Name"} />
          <Input title={"Duration"} />
          {/* <Input title={"Course Id"} /> */}
          <select className="bg-transparent border-b-2 border-primaryLight p-1 w-full mb-4 placeholder-primaryDark">
            <option value="">Course Name</option>
            {courseNames.map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <select className="bg-transparent border-b-2 border-primaryLight p-1 w-full mb-4 placeholder-primaryDark">
            <option value="">Chapter Name</option>
            {chapterNames.map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <p className="mb-2 text-left font-semibold">Upload Test Paper :-</p>
          <input type="file" placeholder="Course content" className="w-full" />
        </div>
      </ModalComp>
    </div>
  );
}

export default AddTest;
