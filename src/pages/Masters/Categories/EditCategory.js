import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap"
import { useHistory, useParams } from "react-router-dom";
import fetchPost from "../../../App/components/fetchPost";

const EditCategory = () => {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { category } = history.location.state;

  useEffect(() => {
    if (category) {
      setName(category.name);
      setSpecies(category.species);
    }
  }, []);

  const handleSelect = (e) => {
    setSpecies(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await fetchPost("/admin/category?id=" + id, { name, species }, "PATCH");
    setLoading(false);
    if (result) history.push("/masters/categories", "refetch");
  };

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Edit Category</Card.Title>
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
                <Form.Label>Species</Form.Label>
                <Form.Control
                  onChange={e => handleSelect(e)}
                  value={species}
                  as="select"
                  isValid={species ? true : false}
                  required
                >
                  <option value="">Choose One...</option>
                  <option value="Small Mammalia">Small Mammalia</option>
                  <option value="Big Mammalia">Big Mammalia</option>
                  <option value="Repitle">Repitle</option>
                  <option value="Amphibia">Amphibia</option>
                </Form.Control>
              </Form.Group>
              <Button id="button_submit" disabled={isLoading} type="submit" variant="primary">{isLoading ? "Loading..." : "Submit"}</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default EditCategory;
