import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Courses from "./Pages/Courses";
import ScrollToTop from "./components/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import AdminHome from "./Dashboard/Pages/AdminHome";
import Categories from "./Pages/Categories";
import "react-toastify/dist/ReactToastify.css";
import EditCourse from "./Dashboard/Pages/EditCourse";
import NavbarComp from "./components/Navbar/Navbar";
import EditTests from "./Dashboard/Pages/EditTests";
import TakeTest from "./Pages/TakeTest";
import MyCourses from "./Pages/MyCourses";
import CourseDetails from "./Pages/CourseDetails";
import ProgressDetails from "./Pages/ProgressDetails";
import MyTests from "./Pages/MyTests";
import { useEffect } from "react";
import { getProfileAxios } from "./helpers/axiosApi";
import { saveUser } from "./store/userSlice";
import GuestRoute from "./Routes/GuestRoutes";
import DashboardRoute from "./Routes/Dashboard";

function App() {
  const dispatch = useDispatch();
  const location = window.location.href;
  const splitLocation = location.split("/");
  const getProfileFunct = async (data) => {
    const res = await getProfileAxios({ userId: data.id });
    if (res.data.success) {
      console.log(res.data);
      dispatch(saveUser(res?.data?.data?.user));
      // if (res?.data?.user?.userType === "TEACHER") {
      //   // navigate("/dashboard");
      // }
    }
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.id) {
      getProfileFunct(user);
    }
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop />
        {splitLocation.includes("take-test") ? <></> : <NavbarComp />}
        <Routes>
          <Route
            path="/"
            element={
              <GuestRoute>
                <div id="home" className="App">
                  <Home />
                </div>
              </GuestRoute>
            }
          />
          <Route path="/:categoryId/courses" element={<Courses />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route
            path="/:learnerId/progress/:courseId"
            element={<ProgressDetails />}
          />
          <Route path="/:learnerId/take-test/:testId" element={<TakeTest />} />
          <Route path="/:learnerId/my-courses" element={<MyCourses />} />
          <Route path="/:learnerId/my-tests" element={<MyTests />} />
          <Route
            path="/dashboard"
            element={
              <DashboardRoute>
                <AdminHome />
              </DashboardRoute>
            }
          />
          <Route
            path="/dashboard/edit-course"
            element={
              <DashboardRoute>
                <EditCourse />
              </DashboardRoute>
            }
          />
          <Route
            path="/dashboard/edit-test"
            element={
              <DashboardRoute>
                <EditTests />
              </DashboardRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
