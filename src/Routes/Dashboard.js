import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const DashboardRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  let location = useLocation();
  //   console.log("Dashboard==>>", user);
  if (!user.isVerified || !user.userType === "TEACHER") {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  //   console.log(
  //     "Dashboard==>>!user.isVerified === true",
  //     !user.isVerified === true
  //   );
  //   console.log("Dashboard==>>!user.userType === ", !user.userType === "TEACHER");
  return children;
};

export default DashboardRoute;
