import Cards from "../components/Cards/Cards";
import { useParams } from "react-router";
import { useEffect } from "react";

const data = [
  {
    id: 1,
    category: "App Development",
    courses: [
      {
        id: 1,
        title: "course title",
        shortDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 2,
        title: "course title",
        shortDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 3,
        title: "course title",
        shortDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 4,
        title: "course title",
        shortDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 5,
        title: "course title",
        shortDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 6,
        title: "course title",
        shortDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 2,
    category: "Web Development",
    courses: [
      {
        id: 1,
        title: "course title",
        shortDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 2,
        title: "course title",
        shortDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
];
function Courses() {
  const { categoryId } = useParams();
  useEffect(() => {
    // code
  }, [categoryId]);

  return (
    <div>
      <div className="w-full m-auto pt-12 justify-center px-20 bg-black">
        <div className="flex flex-row">
          <p className="text-3xl font-bold text-white">Available Courses</p>
          <p className="ml-auto text-xl items-center flex text-white">
            {/* <FilterListIcon className="mr-2" /> */}
            <select className="bg-transparent">
              <option hidden>Filter</option>
              {data.map((item, index) => {
                return (
                  <option
                    key={index}
                    className="bg-transparent text-black"
                    id={item.id}
                  >
                    {item.category}
                  </option>
                );
              })}
            </select>
          </p>
        </div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <p
                id={item.id}
                className="text-secondaryExtraLight text-2xl mt-4"
              >
                {item?.category} :-
              </p>
              <div className="flex flex-row justify-evenly flex-wrap">
                {item?.courses.map((course, index) => {
                  let bgColor;
                  index % 6 === 0
                    ? (bgColor = "#f9b234")
                    : index % 6 === 1
                    ? (bgColor = "#3ecd5e")
                    : index % 6 === 2
                    ? (bgColor = "#e44002")
                    : index % 6 === 3
                    ? (bgColor = "#952aff")
                    : index % 6 === 4
                    ? (bgColor = "#cd3e94")
                    : index % 6 === 5
                    ? (bgColor = "#4c49ea")
                    : (bgColor = "");
                  return (
                    <Cards key={index} cardData={{ ...course, bgColor }} />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
