import { Card, Row } from "react-bootstrap"
import ReadOnlyColumn from "../../../../App/components/ReadOnlyColumn"

const Main = ({ user }) => {
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h3">Main</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row>
          <img src={user.imageUrl} />
          <ReadOnlyColumn data={{ name: "Name", value: user.name }} />
          <ReadOnlyColumn data={{ name: "Email", value: user.email }} />
        </Row>
      </Card.Body>
    </Card>
  )
};

export default Main;
