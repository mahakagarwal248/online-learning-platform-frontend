import ModalComp from "../../Modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import { changemodalStep } from "../../../store/webSlice";
import { useMutation } from "@tanstack/react-query";
import { verifyOtp } from "../../../helpers/axiosApi";
import { useState } from "react";
import { saveOtp } from "../../../store/userSlice";

function Otp() {
  const [otp, setOtp] = useState({
    firstNum: "",
    secondNum: "",
    thirdNum: "",
    forthNum: "",
  });
  const dispatch = useDispatch();
  const {
    encryptedOtp,
    user: { email },
  } = useSelector((data) => data.user);
  const { preModalStep } = useSelector((data) => data.web);
  const { mutate } = useMutation({
    mutationFn: async (data) => {
      return await verifyOtp(data);
    },
    onSuccess: (data) => {
      if (data.success && data.data.isValid) {
        dispatch(changemodalStep(0));
      }
    },
  });
  const handleClose = () => {
    dispatch(changemodalStep(1));
  };
  const handleSubmit = () => {
    const finalOtp = `${otp.firstNum}${otp.secondNum}${otp.thirdNum}${otp.forthNum}`;
    if (preModalStep === 1) {
      mutate({ email, encryptedOtp, otp: finalOtp });
    } else {
      dispatch(saveOtp(finalOtp));
      dispatch(changemodalStep(4));
    }
  };
  const styleData = {
    width: "400px",
    height: "200px",
    buttonText: "Submit",
    closeButtonText: "Cancel",
    background: "bg-white",
    transition: "transform origin-right-top transition duration-1000",
    handleClose: handleClose,
    handleSubmit: handleSubmit,
  };

  const prevInputHandler = (event) => {
    setTimeout(() => {
      if (
        event.code === "Backspace" &&
        event.target.value === "" &&
        event.target.previousSibling
      ) {
        event.target.previousSibling.focus();
      }
      if (event.code === "ArrowRight" && event.target.nextSibling) {
        event.target.nextSibling.focus();
      }
      if (event.code === "ArrowLeft" && event.target.previousSibling) {
        event.target.previousSibling.focus();
      }
      if (event.target.value !== "" && event.target.nextSibling) {
        console.log("coming here");
        event.target.nextSibling.focus();
      }
    }, 10);
  };

  const handlePaste = (event) => {
    const pastedData = event.clipboardData.getData("Text");
    const otpArray = pastedData.split("").slice(0, 4);

    setOtp({
      firstNum: otpArray[0] || "",
      secondNum: otpArray[1] || "",
      thirdNum: otpArray[2] || "",
      forthNum: otpArray[3] || "",
    });

    setTimeout(() => {
      event.target.nextSibling.nextSibling.nextSibling.focus();
    }, 0);
  };

  return (
    <div>
      <ModalComp styles={styleData}>
        <div className="w-4/5 text-center m-auto">
          <div className="flex flex-row my-3 mb-5 justify-center text-3xl">
            <p>Enter OTP</p>
          </div>
          <div className="flex flex-row justify-evenly">
            <input
              id="input1"
              type="text"
              className="h-12 w-12 border-1 border-black text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              maxLength="1"
              onPaste={handlePaste}
              onKeyDown={(event) => prevInputHandler(event)}
              value={otp.firstNum}
              onChange={(e) => {
                setOtp({ ...otp, firstNum: e.target.value });
              }}
            />
            <input
              type="text"
              className="h-12 w-12 border-1 border-black text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              maxLength="1"
              onPaste={handlePaste}
              onKeyDown={(event) => prevInputHandler(event)}
              value={otp.secondNum}
              onChange={(e) => {
                setOtp({ ...otp, secondNum: e.target.value });
              }}
            />
            <input
              type="text"
              className="h-12 w-12 border-1 border-black text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              maxLength="1"
              onPaste={handlePaste}
              onKeyDown={(event) => prevInputHandler(event)}
              value={otp.thirdNum}
              onChange={(e) => {
                setOtp({ ...otp, thirdNum: e.target.value });
              }}
            />
            <input
              type="text"
              className="h-12 w-12 border-1 border-black text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              maxLength="1"
              onPaste={handlePaste}
              onKeyDown={(event) => prevInputHandler(event)}
              value={otp.forthNum}
              ref={(input) => input && input.focus()}
              onChange={(e) => {
                setOtp({ ...otp, forthNum: e.target.value });
              }}
            />
          </div>
        </div>
      </ModalComp>
    </div>
  );
}

export default Otp;
