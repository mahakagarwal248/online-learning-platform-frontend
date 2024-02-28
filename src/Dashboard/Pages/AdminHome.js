import { useSelector } from "react-redux";
import AddCourse from "../Screens/AddCourse";
import AddTests from "../Screens/AddTests";
import Summary from "../Summary";
import Sidebar from "../Sidebar";
import Contact from "../../components/Contact";
import ViewTestDetails from "../Screens/ViewTestDetails";
import ViewCourseDetails from "../Screens/ViewCourseDetails";

function AdminHome() {
  const compStep = {
    5: AddCourse,
    6: AddTests,
    7: Contact,
    8: ViewTestDetails,
    9: ViewCourseDetails,
  };
  const step = useSelector((data) => data.web.modalStep);
  const Step = compStep[step];
  return (
    <div className="lg:h-[calc(100vh-64px)] xl:h-[calc(100vh-64px)] pb-0 mb-0 flex flex-col md:block md:full sm2:block sm2:full sm:block sm:full xsm:block xsm:full">
      {step !== 0 ? <Step /> : ""}
      <div className="overflow-hidden flex flex-row h-full w-full">
        <Sidebar />
        <Summary />
      </div>
    </div>
  );
}

export default AdminHome;
