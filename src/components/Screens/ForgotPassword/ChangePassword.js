import ModalComp from "../../Modals/Modal";
import Input from "../../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { changemodalStep, changeShow } from "../../../store/webSlice";
import { useMutation } from "@tanstack/react-query";
import { changePasswordAxios } from "../../../helpers/axiosApi";
import { useState } from "react";
function ChangePassword() {
  const dispatch = useDispatch();
  const [password, setpassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const {
    otp,
    encryptedOtp,
    user: { email },
  } = useSelector((data) => data.user);

  const { mutate } = useMutation({
    mutationFn: async (data) => {
      return await changePasswordAxios(data);
    },
  });
  const handleClose = () => {
    dispatch(changemodalStep(1));
  };
  const handleSubmit = () => {
    if (password.newPassword !== password.confirmPassword) {
      return;
    }

    console.log("password==>>>", password);
    mutate({ email, encryptedOtp, otp, password: password.newPassword });
    dispatch(changeShow(false));
  };
  const styleData = {
    width: "400px",
    height: "250px",
    buttonText: "Submit",
    closeButtonText: "Cancel",
    background: "bg-white",
    transition: "transform origin-right-top transition duration-1000",
    handleClose: handleClose,
    handleSubmit: handleSubmit,
  };
  return (
    <div>
      <ModalComp styles={styleData}>
        <div className="w-4/5 text-center m-auto">
          <div className="flex flex-row my-3 mb-5 justify-center text-3xl">
            <p>New Password</p>
          </div>
          <Input
            title={"Enter New Password"}
            value={password.newPassword}
            onChange={(e) => {
              setpassword({ ...password, newPassword: e.target.value });
            }}
          />
          <Input
            title={"Confirm New Password"}
            value={password.confirmPassword}
            onChange={(e) => {
              setpassword({ ...password, confirmPassword: e.target.value });
            }}
          />
        </div>
      </ModalComp>
    </div>
  );
}

export default ChangePassword;
