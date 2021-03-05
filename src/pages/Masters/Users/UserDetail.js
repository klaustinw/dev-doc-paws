import { useHistory } from "react-router-dom";
import { Col, Card, Row, Tab, Nav, Button } from 'react-bootstrap';
import Pets from "./Menu/Pets";
import Main from "./Menu/Main";
import Banks from "./Menu/Banks";
import Address from "./Menu/Address";

const UserDetail = (props) => {
  const history = useHistory();
  const user = props.location.user;
  if (!user) history.push("/masters/users");

  return (
    <Col>
      <Card>
        <Card.Header>
          <Card.Title className="inline" as="h5">User Detail</Card.Title>
        </Card.Header>
        <Card.Body>
          <Tab.Container defaultActiveKey="home">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="home">Main</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="pets">Pets</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="address">Address</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="banks">Banks</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content className="px-0 py-0">
                  <Tab.Pane eventKey="home">
                    <Main user={user} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="pets">
                    <Pets />
                  </Tab.Pane>
                  <Tab.Pane eventKey="address">
                    <Address />
                  </Tab.Pane>
                  <Tab.Pane eventKey="banks">
                    <Banks />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Card.Body>
      </Card>
    </Col>
  )
};

export default UserDetail;
