import { useDispatch } from "react-redux";
import { changeShow, changemodalStep } from "../store/webSlice";
import { useState, useLayoutEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

function Sidebar() {
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);
  const [width, setWidth] = useState("");

  const getWidth = () => {
    setWidth(window.innerWidth);
  };
  
  useLayoutEffect(() => {
    getWidth();
    window.addEventListener("resize", getWidth);
    getWidth();
    return () => window.removeEventListener("resize", getWidth);
  }, []);

  const handleAddCourse = () => {
    dispatch(changeShow(true));
    dispatch(changemodalStep(5));
  };
  const handleAddTest = () => {
    dispatch(changeShow(true));
    dispatch(changemodalStep(6));
  };
  const handleContactUs = () => {
    dispatch(changeShow(true));
    dispatch(changemodalStep(7));
  };
  return (
    <div>
      {isToggled || width > 1092 ? (
        <div className="text-left md:fixed sm2:fixed sm:fixed xsm:fixed pt-4 overflow-y-hidden w-60 lg:w-56 bg-dashboardSectionBg h-[-webkit-fill-available] transform origin-left transition duration-1000 shadow-right">
          <p className="cursor-pointer flex items-center w-full pl-3 py-2 mb-1 text-2xl font-bold text-slate-900 border-2 shadow-bottom border-gray-100">
            Dashboard{" "}
            {width < 1092 ? (
              <CloseIcon
                onClick={() => setIsToggled(!isToggled)}
                className="ml-auto text-gray-500"
              />
            ) : (
              <></>
            )}
          </p>
          <p
            onClick={handleAddCourse}
            className="cursor-pointer w-full pl-3 py-2 mb-1 text-md font-bold text-gray-500 border-2 shadow-bottom border-gray-100"
          >
            Add New Course
          </p>
          <p
            onClick={handleAddTest}
            className="cursor-pointer w-full pl-3 py-2 mb-1 text-md font-bold text-gray-500 border-2 shadow-bottom border-gray-100"
          >
            Add New Test
          </p>
          <p
            onClick={handleContactUs}
            className="cursor-pointer w-full pl-3 py-2 mb-1 text-md font-bold text-gray-500 border-2 shadow-bottom border-gray-100"
          >
            Contact Us
          </p>
        </div>
      ) : !isToggled && width < 1092 ? (
        <>
          <img
            src="/assets/sidebar-icon.png"
            alt="icon"
            className="h-16 w-16 cursor-pointer xsm:h-12 xsm:w-12"
            onClick={() => setIsToggled(!isToggled)}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Sidebar;
