import { Card, Row } from "react-bootstrap";
import ReadOnlyColumn from "../../../../App/components/ReadOnlyColumn";

const User = ({ user }) => {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title as="h3">User</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <ReadOnlyColumn data={{ name: "Name", value: user.name }} />
            <ReadOnlyColumn data={{ name: "Email", value: user.email }} />
            <ReadOnlyColumn data={{ name: "Image", value: user.imageUrl }} />
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default User;
