import { Col, Form } from "react-bootstrap";

const ReadOnlyColumn = ({ data }) => {
  return (
    <Col md={3}>
      <Form.Group>
        <Form.Label>{data.name}</Form.Label>
        <Form.Control readOnly type="text" value={data.value || "None"} />
      </Form.Group>
    </Col>
  )
};

export default ReadOnlyColumn;
