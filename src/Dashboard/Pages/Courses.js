const addedCourse = [
  {
    title: "Course Title",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    addedOn: "04-10-2001",
  },
  {
    title: "Course Title",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    addedOn: "04-10-2001",
  },
  {
    title: "Course Title",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    addedOn: "04-10-2001",
  },
  {
    title: "Course Title",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    addedOn: "04-10-2001",
  },
  {
    title: "Course Title",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    addedOn: "04-10-2001",
  },
];

function Courses() {
  return (
    <div>
      <p>Courses added by you :-</p>
      <div className="flex flex-row flex-wrap justify-evenly">
        {addedCourse.length > 0 &&
          addedCourse.map((item, index) => {
            return (
              <div
                key={index}
                className="border-1 border-white p-4 rounded-lg m-4"
              >
                <div className="w-80 border-1 border-white p-3 text-left rounded-lg shadow-3xl">
                  <p className="text-2xl font-bold mb-2">{item.title}</p>
                  <p className="my-3 text-sm">{item.shortDesc}</p>
                  <p className="font-semibold text-sm">
                    Added On: {item.addedOn}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Courses;
