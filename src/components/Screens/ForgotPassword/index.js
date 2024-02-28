import Input from "../../Input/Input";
import ModalComp from "../../Modals/Modal";
import { useDispatch } from "react-redux";
import { changemodalStep } from "../../../store/webSlice";
import { saveEncryptedOtp, saveUser } from "../../../store/userSlice";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { forgotPasswordAxios } from "../../../helpers/axiosApi";

function ForgotPassword() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleClose = () => {
    dispatch(changemodalStep(1));
  };
  const { mutate } = useMutation({
    mutationFn: async (data) => {
      return await forgotPasswordAxios(data);
    },
    onSuccess: (data) => {
      dispatch(saveEncryptedOtp(data?.data?.encryptedOtp));
      dispatch(saveUser(data?.data?.user));
      dispatch(changemodalStep(3));
    },
  });
  const handleSubmit = () => {
    console.log("forgot Password");
    mutate({ email });
  };
  const styleData = {
    width: "400px",
    height: "200px",
    buttonText: "Submit",
    closeButtonText: "Cancel",
    background: "bg-white",
    transition: "transform origin-right-top transition duration-1000",
    handleClose,
    handleSubmit,
  };
  return (
    <div>
      <ModalComp styles={styleData}>
        <div className="w-4/5 text-center m-auto">
          <div className="flex flex-row my-3 mb-5 justify-center text-3xl">
            <p>Enter Details</p>
          </div>
          <Input
            title={"Enter Email"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </ModalComp>
    </div>
  );
}

export default ForgotPassword;
