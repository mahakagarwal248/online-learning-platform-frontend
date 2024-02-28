import { useDispatch } from "react-redux";
import ModalComp from "./Modals/Modal";
import { changeShow, changemodalStep } from "../store/webSlice";
import { CONTACT_EMAIL, CONTACT_NUMBER } from "../Constants";

function Contact() {
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
    width: "440px",
    height: "200px",
    closeButtonText: "Close",
    background: "bg-white",
    transition: "transform origin-right-top transition duration-1000",
    handleClose: handleClose,
    handleSubmit: handleSubmit,
  };
  return (
    <div>
      <ModalComp styles={styleData}>
        <div className="w-4/5 text-center m-auto">
          <p className="text-3xl mt-3 mb-4">Contact Details</p>
          <p className="text-lg mt-4">
            Call us on : <strong>{CONTACT_NUMBER}</strong>
          </p>
          <p className="mt-2">Or</p>
          <p className="text-lg mt-2">
            Drop an email : <strong>{CONTACT_EMAIL}</strong>
          </p>
        </div>
      </ModalComp>
    </div>
  );
}

export default Contact;
