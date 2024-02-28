import { useNavigate } from "react-router";
import Cards from "../Cards/Cards";
import SectionHeading from "../Headings/SectionHeading";

const cardData = [
  {
    title: "Web Development",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "#f9b234",
  },
  {
    title: "Social Media Marketing",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "#3ecd5e",
  },
  {
    title: "App Development",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "#e44002",
  },
];

function Courses() {
  const navigate = useNavigate();

  return (
    <div
      id="courses"
      className="w-full m-auto pt-5 py-10 justify-center px-20 bg-black xsm:px-10"
    >
      <SectionHeading heading={"COURSES"} />
      <h1 className="text-4xl text-white my-3">Popular Courses</h1>
      <div className="flex flex-row justify-evenly flex-wrap">
        {cardData.length > 0 &&
          cardData.map((item, index) => {
            return <Cards key={index} cardData={item} />;
          })}
      </div>
      <button
        onClick={() => navigate("/0/courses")}
        className="text-white bg-secondaryLight py-3 px-5 border-1 border-secondaryDark rounded-full"
      >
        View All
      </button>
    </div>
  );
}

export default Courses;
