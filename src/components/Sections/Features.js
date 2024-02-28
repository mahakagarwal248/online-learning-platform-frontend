import FeatureCards from "../Cards/FeatureCards";
import SectionHeading from "../Headings/SectionHeading";

const cardData = [
  {
    url: "/assets/graduation-cap.png",
    title: "Diversified Content",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    url: "/assets/globe.png",
    title: "Video Lectures",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    url: "/assets/assignment.png",
    title: "Assignment & Projects",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    url: "/assets/book.png",
    title: "Book Library",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];
function Features() {
  return (
    <div id="features" className="py-16 bg-secondaryExtraLight">
      <SectionHeading heading={"TOP FEATURES"} />
      <div className="w-full m-auto mt-4 flex flex-row justify-center md:flex-wrap sm2:flex-wrap sm:flex-wrap xsm:flex-wrap">
        {cardData &&
          cardData.length > 0 &&
          cardData.map((data, index) => {
            return <FeatureCards key={index} cardData={data} />;
          })}
        {/* <FeatureCards cardData={cardData[0]} />
        <FeatureCards cardData={cardData[1]} />
        <FeatureCards cardData={cardData[2]} />
        <FeatureCards cardData={cardData[3]} /> */}
      </div>
    </div>
  );
}

export default Features;
