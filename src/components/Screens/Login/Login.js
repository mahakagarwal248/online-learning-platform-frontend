import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { changemodalStep } from "../../../store/webSlice";
import { PLATFORM_NAME } from "../../../Constants";
import { changeAuthStep } from "../../../store/userSlice";
import CommonComp from "./Common";

function Login({ signupDetails, setSignDetails }) {
  const dispatch = useDispatch();

  const handleSwitchClick = () => {
    dispatch(changeAuthStep(1));
  };

  const handleForgotClick = () => {
    dispatch(changemodalStep(2));
  };

  return (
    <div>
      <div className="flex flex-row my-3 mb-5 text-3xl">
        <p>Login</p>
        <OverlayTrigger
          key={"right"}
          placement={"right"}
          overlay={<Tooltip>Go To SignUp</Tooltip>}
        >
          <AddIcon
            className="p-2 !h-12 !w-12 cursor-pointer rounded-full text-3xl ml-auto bg-secondaryLight right-0"
            onClick={handleSwitchClick}
          />
        </OverlayTrigger>
      </div>
      <CommonComp
        signupDetails={signupDetails}
        setSignDetails={setSignDetails}
      />
      <div
        className="text-right font-bold text-sm"
        style={{ marginTop: "-18px", color: "gray" }}
      >
        <span className="cursor-pointer" onClick={handleForgotClick}>
          Forgot Password?
        </span>
      </div>
      <p className="text-center mt-4 mb-4 text-lg">Or</p>
      <div className="w-full m-auto text-center ">
        <button className="border-1 border-black px-4 py-2 mb-3">
          Login with google
        </button>
      </div>
      <div className="w-full m-auto text-center mt-4">
        <p className="text-md">
          New to {PLATFORM_NAME}?
          <button
            className="underline"
            onClick={handleSwitchClick}
            style={{ color: "blue" }}
          >
            SignUp
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
