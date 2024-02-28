import moment from "moment";
import { useNavigate } from "react-router";
import { learnerId } from "../Constants";

const data = [
  {
    courseDetails: {
      title: "Web Development",
      shortDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      duration: "2 months",
      startedOn: "12-12-2023",
      courseId: "1",
      files: [
        "https://www.google.com",
        "https://www.google.com",
        "https://www.google.com",
      ],
    },
    testDetails: {
      testId: 101,
      isCompleted: false,
    },
    currentChapter: 2,
  },
  {
    courseDetails: {
      title: "Social Media Marketing",
      shortDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      duration: "2 months",
      startedOn: "12-12-2023",
      courseId: "2",
      files: [
        "https://www.google.com",
        "https://www.google.com",
        "https://www.google.com",
      ],
    },
    testDetails: {
      testId: 201,
      isCompleted: false,
    },
    currentChapter: 3,
  },
  {
    courseDetails: {
      title: "App Development",
      shortDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      duration: "2 months",
      startedOn: "12-12-2023",
      courseId: "3",
      files: [
        "https://www.google.com",
        "https://www.google.com",
        "https://www.google.com",
      ],
    },
    testDetails: {
      testId: 301,
      isCompleted: false,
    },
    currentChapter: 0,
  },
];
function MyCourses() {
  const navigate = useNavigate();
  return (
    <div className="w-4/5 m-auto text-center justify-center pt-5">
      <h1 className="font-bold text-2xl">Courses that you have enrolled :-</h1>
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-row border-1 border-black rounded-lg p-3 w-3/5 m-auto my-5 text-left shadow-2xl bg-gray-100"
            >
              <div>
                <p className="font-bold text-lg text-primaryLight cursor-pointer">
                  {item?.courseDetails?.title}
                </p>
                <p>{item?.courseDetails?.shortDesc}</p>
                <p>
                  <b className="text-primaryLight">Started On:</b>{" "}
                  {item.courseDetails?.startedOn}
                </p>
                <p>
                  <b className="text-primaryLight">Deadline:</b>{" "}
                  {moment(Date.now())
                    .add(item.courseDetails?.duration.split(" ")[0], "M")
                    .format("DD-MM-YYYY")}
                </p>
              </div>
              <div>
                <button
                  onClick={() =>
                    navigate(
                      `/${learnerId}/progress/${item?.courseDetails?.courseId}`,
                      {
                        state: item,
                      }
                    )
                  }
                  className="bg-secondaryExtraLight px-3 py-2 rounded-lg font-bold"
                >
                  Continue
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MyCourses;
