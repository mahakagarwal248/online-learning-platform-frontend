import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { CONTACT_EMAIL, CONTACT_NUMBER } from "../../Constants";

function Footer() {
  return (
    <div className="bg-primaryDark text-white pt-20 pb-5 xsm:pt-10">
      <div className="flex flex-row justify-evenly py-4 flex-wrap">
        <div className="text-left xsm:w-full xsm:inline-grid xsm:justify-start xsm:my-2 sm:mr-4 xsm:ml-8 mt-2 sm2:ml-5 sm2:flex-[0_0_33%] sm:flex-[0_0_50%] ">
          <h1 className="text-xl font-bold text-secondaryLight ml-2 mb-2">
            Quick Links
          </h1>
          <ul className="list-none">
            <li>
              <ChevronRightIcon className="text-secondaryLight" /> About Us
            </li>
            <li>
              <ChevronRightIcon className="text-secondaryLight" /> Contact Us
            </li>
            <li>
              <ChevronRightIcon className="text-secondaryLight" /> Privacy
              Policy
            </li>
            <li>
              <ChevronRightIcon className="text-secondaryLight" /> Terms &
              Conditions
            </li>
            <li>
              <ChevronRightIcon className="text-secondaryLight" /> FAQs
            </li>
          </ul>
        </div>
        <div className="text-left xsm:w-full xsm:inline-grid xsm:justify-start xsm:my-2 sm:mr-4 xsm:ml-8 mt-2 sm2:ml-5 sm2:flex-[0_0_33%] sm:flex-[0_0_50%] ">
          <h1 className="text-xl font-bold text-secondaryLight mb-2">
            Contact
          </h1>
          <ul>
            <li>
              <LocationOnIcon className="mr-1" /> Bareilly, UP, India
            </li>
            <li className="my-1">
              <CallIcon className="mr-1" />
              {CONTACT_NUMBER}
            </li>
            <li>
              <EmailIcon className="mr-1" /> {CONTACT_EMAIL}
            </li>
            <li className="flex flex-row mt-3">
              <div>
                <img
                  src="/assets/instagram.png"
                  alt="instagram"
                  className="h-6 w-6"
                />
              </div>

              <div className="ml-3">
                <img
                  src="/assets/linkedin.png"
                  alt="linkedin"
                  className="h-6 w-6"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="text-left xsm:w-full xsm:inline-grid xsm:justify-start xsm:my-2 sm:mr-4 xsm:ml-8 mt-2 sm2:ml-5 sm2:flex-[0_0_33%] sm:flex-[0_0_50%] ">
          <h1 className="text-xl font-bold text-secondaryLight mb-2">
            Gallery
          </h1>
          <div className="flex flex-row justify-evenly">
            <img
              src="/assets/study.jpg"
              alt="gallery"
              className="h-16 w-16 mr-2 hover:cursor-pointer"
            />
            <img
              src="/assets/study.jpg"
              alt="gallery"
              className="h-16 w-16 mr-2 hover:cursor-pointer"
            />
            <img
              src="/assets/study.jpg"
              alt="gallery"
              className="h-16 w-16 mr-1 hover:cursor-pointer"
            />
          </div>
          <div className="flex flex-row justify-evenly mt-2">
            <img
              src="/assets/study.jpg"
              alt="gallery"
              className="h-16 w-16 mr-2 hover:cursor-pointer"
            />
            <img
              src="/assets/study.jpg"
              alt="gallery"
              className="h-16 w-16 mr-2 hover:cursor-pointer"
            />
            <img
              src="/assets/study.jpg"
              alt="gallery"
              className="h-16 w-16 mr-1 hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="text-left xsm:w-full xsm:inline-grid xsm:justify-start xsm:my-2 sm:mr-4 xsm:ml-8 mt-2 sm2:ml-5 sm2:flex-[0_0_33%] sm:flex-[0_0_50%] ">
          <h1 className="text-xl font-bold text-secondaryLight mb-2">
            Newsletter
          </h1>
          <p className="w-52">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <div className="flex flex-row mt-2 flex-wrap">
            <input type="text" />
            <button className="bg-secondaryLight ml-2 px-3 py-1 sm:ml-0 sm:mt-2">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row pt-3 w-4/5 m-auto border-t border-secondaryLight flex-wrap xsm:w-full">
        <p>© Your Site Name, All Right Reserved. Designed By HTML Codex</p>
        <div className="flex flex-row justify-evenly ml-auto md:ml-0 md:mt-2 sm2:ml-0 sm2:mt-2 sm:ml-0 sm:mt-2 xsm:ml-0 xsm:mt-2">
          <p className="px-3 border-r border-secondaryLight !xsm:px-2">Home</p>
          <p className="px-3 border-r border-secondaryLight !xsm:px-2">
            Cookies
          </p>
          <p className="px-3 border-r border-secondaryLight !xsm:px-2">Help</p>
          <p className="px-3 !xsm:px-2">FAQs</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
