import { useDispatch } from "react-redux";
import ModalComp from "../../components/Modals/Modal";
import { changeShow, changemodalStep } from "../../store/webSlice";
import { useNavigate } from "react-router";

function DeleteWarning({ setShowWarning, content }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setShowWarning(false);
  };

  const handleSubmit = () => {
    dispatch(changeShow(false));
    dispatch(changemodalStep(0));
    navigate("/dashboard");
  };
  const styleData = {
    width: "400px",
    height: "150px",
    buttonText: "Yes",
    closeButtonText: "Cancel",
    background: "bg-white",
    transition: "transform origin-right-top transition duration-1000",
    modalBackground: "rgba(0, 0, 0, 0.7)",
    handleClose: handleClose,
    handleSubmit: handleSubmit,
  };
  return (
    <div>
      <ModalComp styles={styleData}>
        <div className="w-4/5 m-auto mt-5 text-xl font-semibold text-center">
          Are you sure you want to delete this {content}?
        </div>
      </ModalComp>
    </div>
  );
}

export default DeleteWarning;
