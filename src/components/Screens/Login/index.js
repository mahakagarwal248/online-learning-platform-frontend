import ModalComp from "../../Modals/Modal";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changemodalStep, changeShow } from "../../../store/webSlice";
import { saveEncryptedOtp, saveUser } from "../../../store/userSlice";
import { useMutation } from "@tanstack/react-query";
import { loginAxios, signUp } from "../../../helpers/axiosApi";
import Register from "./Register";
import Login from "./Login";
function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const compSteps = {
    0: Login,
    1: Register,
  };
  const loginMutation = useMutation({
    mutationFn: async (data) => {
      return await loginAxios(data);
    },
    onSuccess: (data) => {
      dispatch(saveUser(data?.data?.user));
      console.log("data==>>>", data.data.user);
      dispatch(changemodalStep(0));

      if (data?.data?.user?.userType === "TEACHER") {
        navigate("/dashboard");
      }
    },
  });

  const signUpMutation = useMutation({
    mutationFn: async (data) => {
      return await signUp(data);
    },

    onSuccess: (data) => {
      dispatch(saveEncryptedOtp(data?.data?.encryptedOtp));
      dispatch(saveUser(data?.data?.user));
      console.log("data==>>>", data.data.user);
      dispatch(changemodalStep(3));
    },
  });

  const [signupDetails, setSignDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    userType: "",
    interest: [],
  });

  const handleClose = () => {
    dispatch(changeShow(false));
    dispatch(changemodalStep(0));
  };

  const handleSubmit = async () => {
    if (step === 1) {
      if (signupDetails === "" || !signupDetails.password) {
        return;
      }
      signUpMutation.mutate(signupDetails);
    } else {
      loginMutation.mutate({
        email: signupDetails.email,
        password: signupDetails.password,
      });
    }
  };

  const step = useSelector((data) => data.user.authStep);
  const Step = compSteps[step];

  const styleData = {
    width: "400px",
    height: "470px",
    buttonText: step === 0 ? "Login" : "Register",
    closeButtonText: "Cancel",
    background: step === 0 ? "bg-white" : "bg-secondaryExtraLight",
    transition:
      step === 0 ? "" : "transform origin-right-top transition duration-1000",
    handleClose: handleClose,
    handleSubmit: handleSubmit,
  };

  return (
    <div>
      <ModalComp styles={styleData}>
        <div className="w-4/5 text-center m-auto">
          <Step signupDetails={signupDetails} setSignDetails={setSignDetails} />
        </div>
      </ModalComp>
    </div>
  );
}

export default Auth;
