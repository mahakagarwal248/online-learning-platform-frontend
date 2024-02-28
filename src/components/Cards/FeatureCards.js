import Card from "react-bootstrap/Card";

function FeatureCards({ cardData }) {

  return (
    <Card
      className="h-full px-0 pb-3 m-6 border-4 border-transparent rounded-large shadow-3xl text-primaryDark hover:border-secondaryDark hover:border-4 transform origin-center hover:scale-105 transition duration-500 md:min-h-[300px] lg:min-h-[400px]"
      style={{ width: "280px" }}
    >
      <Card.Body className="flex flex-col items-center">
        <Card.Title className="my-7">
          <img src={cardData.url} alt="icon" className="h-16 w-16" />
        </Card.Title>
        <Card.Title className=" mb-3">{cardData.title}</Card.Title>
        <Card.Text className=" w-full">{cardData.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FeatureCards;
