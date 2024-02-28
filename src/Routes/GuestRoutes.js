import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const GuestRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  let location = useLocation();
  console.log("user", user);
  console.log(
    "user.isVerified && user.userType === ",
    user.isVerified && user.userType === "TEACHER"
  );
  if (user.isVerified && user.userType === "TEACHER") {
    console.log("in condition");
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return children;
};

export default GuestRoute;
