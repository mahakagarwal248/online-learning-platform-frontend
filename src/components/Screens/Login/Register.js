import RemoveIcon from "@mui/icons-material/Remove";
import Input from "../../Input/Input";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useDispatch } from "react-redux";
import { changeAuthStep } from "../../../store/userSlice";
import CommonComp from "./Common";

function Register({ signupDetails, setSignDetails }) {
  const dispatch = useDispatch();

  const handleSwitchClick = () => {
    dispatch(changeAuthStep(0));
  };

  const handleOnChange = (e, field) => {
    e.preventDefault();
    console.log("changex");
    setSignDetails({ ...signupDetails, [field]: e.target.value });
  };

  return (
    <div>
      <div className="flex flex-row my-3 text-3xl">
        <p>Register</p>
        <OverlayTrigger
          key={"right"}
          placement={"right"}
          overlay={<Tooltip>Go To SignIn</Tooltip>}
        >
          <RemoveIcon
            className="p-2 !h-12 !w-12 cursor-pointer rounded-full text-3xl ml-auto bg-secondaryLight"
            onClick={handleSwitchClick}
          />
        </OverlayTrigger>
      </div>
      <Input title={"Name"} onChange={(e) => handleOnChange(e, "name")} />
      <CommonComp
        signupDetails={signupDetails}
        setSignDetails={setSignDetails}
      />
      <Input title={"Confirm Password"} />
      <Input
        value={signupDetails.mobile}
        title={"Mobile Number"}
        onChange={(e) => handleOnChange(e, "mobile")}
      />
      <select
        className="border-b-2 border-primaryLight bg-transparent pb-1 w-full"
        onChange={(e) => handleOnChange(e, "userType")}
        value={signupDetails.userType}
      >
        <option hidden className="text-primaryDark">
          Select Category
        </option>
        <option value={"STUDENT"} className="text-primaryLight">
          Learner
        </option>
        <option value={"TEACHER"} className="text-primaryLight">
          Instructor
        </option>
      </select>

      <div className="w-full m-auto text-center mt-4">
        <p className="text-md">
          Already a user?
          <button
            className="underline"
            onClick={handleSwitchClick}
            style={{ color: "blue" }}
          >
            SignIn
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
