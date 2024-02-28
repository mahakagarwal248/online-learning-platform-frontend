import Accordion from "react-bootstrap/Accordion";

function AccordionComp({ index, heading, children }) {
  return (
    <Accordion className="mb-4 shadow-bottom">
      <Accordion.Item eventKey={index}>
        <Accordion.Header>{heading}</Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionComp;
