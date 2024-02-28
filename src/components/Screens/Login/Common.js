import Input from "../../Input/Input";

function CommonComp({ signupDetails, setSignDetails }) {
  const handleOnChange = (e, field) => {
    e.preventDefault();
    console.log("changex");
    setSignDetails({ ...signupDetails, [field]: e.target.value });
  };
  return (
    <>
      <Input
        title={"Email"}
        value={signupDetails.email}
        onChange={(e) => handleOnChange(e, "email")}
      />
      <Input
        title={"Password"}
        value={signupDetails.password}
        onChange={(e) => handleOnChange(e, "password")}
      />
    </>
  );
}

export default CommonComp;
