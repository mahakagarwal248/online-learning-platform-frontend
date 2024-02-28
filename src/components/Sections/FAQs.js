import AccordionComp from "../Accordion/Accordion";
import SectionHeading from "../Headings/SectionHeading";

const data = [
  {
    sno: 1,
    heading: "Question 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    sno: 2,
    heading: "Question 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    sno: 3,
    heading: "Question 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    sno: 4,
    heading: "Question 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
  },
];

function FAQs() {
  return (
    <div className="w-full m-auto py-16 px-20 justify-center bg-secondaryExtraLight xsm:px-10">
      <SectionHeading heading={"FAQs"} />
      <h1 className="text-4xl text-primaryDark my-3">
        Frequently Asked Questions
      </h1>
      <div className="w-3/4 m-auto pt-5">
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <AccordionComp
                className="shadow-3xl"
                key={index}
                index={index}
                heading={item.heading}
              >
                <p>{item.text}</p>
              </AccordionComp>
            );
          })}
      </div>
    </div>
  );
}

export default FAQs;
