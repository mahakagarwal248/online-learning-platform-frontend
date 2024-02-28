import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp, submitAction }) {
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      window.alert("TIme's Up!");
      submitAction();
    },
  });

  return (
    <div style={{ textAlign: "right", display: "inline" }}>
      <div style={{ fontSize: "30px" }}>
        <span>Time left : </span>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

export default MyTimer;
