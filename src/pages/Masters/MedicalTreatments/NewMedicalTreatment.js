import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import fetchPost from "../../../App/components/fetchPost";

const NewMedicalTreatment = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetchPost("/admin/mt", { name, detail: category });
    if (response) {
      history.push("/masters/medical-treatments", "refetch");
    }
    setLoading(false);
  };

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Create New Treatment</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) => { setName(e.target.value) }}
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  required
                />
              </Form.Group>
              <Form.Group controlId="species">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  onChange={e => { setCategory(e.target.value) }}
                  as="select"
                  isValid={category ? true : false}
                  required
                >
                  <option value="">Choose One...</option>
                  <option value="Konsultasi Online">Konsultasi Online</option>
                  <option value="Booking dan Live Antrian">Booking dan Live Antrian</option>
                  <option value="Animal Communicator">Animal Communicator</option>
                  <option value="House Call">House Call</option>
                </Form.Control>
              </Form.Group>
              <Button id="button_submit" disabled={isLoading} type="submit" variant="primary">{isLoading ? "Loading..." : "Submit"}</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default NewMedicalTreatment;
