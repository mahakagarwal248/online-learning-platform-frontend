import Tooltip from "react-bootstrap/Tooltip";

function TooltipComp(props) {
    console.log(props);

  const { data, clickaction } = props;
  //   if (props.popper.state) {
  //     data = props.popper.state.options.testObj;
  //     clickAction = props.popper.state.options.clickAction;
  //   }

  return (
    <Tooltip id="button-tooltip" {...props}>
      <button onClick={clickaction}>{data}</button>
    </Tooltip>
  );
}

export default TooltipComp;
