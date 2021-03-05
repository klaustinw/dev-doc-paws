import { Card, Row } from "react-bootstrap";
import ReadOnlyColumn from "../../../../App/components/ReadOnlyColumn";

const Pet = ({ pet }) => {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title as="h3">Pet</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <ReadOnlyColumn data={{ name: "Name", value: pet.name }} />
            <ReadOnlyColumn data={{ name: "Sex", value: pet.sex }} />
            <ReadOnlyColumn data={{ name: "Age", value: pet.age }} />
            <ReadOnlyColumn data={{ name: "Weight", value: pet.weight }} />
            <ReadOnlyColumn data={{ name: "Image", value: pet.image }} />
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Pet;
