import Carousel from "react-bootstrap/Carousel";

function CarouselComp() {
  return (
    <Carousel
      controls={false}
      // hover={true}
      wrap={true}
      interval={2000}
      className="transition-shadow	"
    >
      <Carousel.Item className="transform origin-center transition duration-500">
        <img
          className="w-100"
          src="/assets/carousel2.jpg"
          alt="First slide"
          style={{ height: "90vh" }}
        />
        <Carousel.Caption
          style={{
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <h3 className="">First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <br />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="transform origin-center transition duration-500">
        <img
          className="h-screen w-100"
          src="/assets/carousel1.jpg"
          alt="First slide"
          style={{ height: "90vh" }}
        />
        <Carousel.Caption
          style={{
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="transform origin-center transition duration-500">
        <img
          className="h-screen w-100"
          src="/assets/carousel3.jpg"
          alt="First slide"
          style={{ height: "90vh" }}
        />
        <Carousel.Caption
          style={{
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
