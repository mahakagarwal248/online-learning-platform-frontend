import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PLATFORM_NAME } from "../../Constants";
import SectionHeading from "../Headings/SectionHeading";

function About() {
  return (
    <div id="about" className="px-44 py-12 bg-primaryDark md:px-16 sm2:px-16 sm:px-14 xsm:px-4 lg:px-20">
      <SectionHeading heading={"ABOUT US"} />
      <div className="flex flex-row justify-cente my-3 mt-5">
        <div className="md:hidden sm2:hidden sm:hidden xsm:hidden">
          <img className=" h-full w-full" src="/assets/about-img.jpg" alt="" />
        </div>
        <div className="text-left px-6">
          <h1 className="text-4xl font-bold text-secondaryLight mb-2">
            Welcome to {PLATFORM_NAME}
          </h1>
          <p className=" text-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <br />
          <div className="flex flex-row w-full">
            <ul>
              <li className="leading-8 text-lg text-white">
                <ArrowForwardIcon className="text-secondaryLight" /> Video
                Lectures
              </li>
              <li className="leading-8 text-lg text-white">
                <ArrowForwardIcon className="text-secondaryLight" /> Certificate
              </li>
              <li className="leading-8 text-lg text-white">
                <ArrowForwardIcon className="text-secondaryLight" /> Progress
                Report
              </li>
            </ul>
            <ul className=" ml-28">
              <li className="leading-8 text-lg text-white">
                <ArrowForwardIcon className="text-secondaryDark" /> Video
                Lectures
              </li>
              <li className="leading-8 text-lg text-white">
                <ArrowForwardIcon className="text-secondaryDark" /> Certificate
              </li>
              <li className="leading-8 text-lg text-white">
                <ArrowForwardIcon className="text-secondaryDark" /> Progress
                Report
              </li>
            </ul>
          </div>
          <br />
          <button className="bg-secondaryDark px-5 py-3 text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
