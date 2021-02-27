import { Button, Col, FormControl, Row } from "react-bootstrap";

const TableHeader = ({ currentLimit, setCurrentLimit }) => {
  return (
    <Col xs="auto">
      <Row className="d-flex align-items-center">
        <p>Show&nbsp;</p>
        <select className="m-b-15" value={currentLimit} id="limit" onChange={e => { setCurrentLimit(e.target.value) }}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        <p>&nbsp;rows&nbsp;&nbsp;</p>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Row>
    </Col>
  );
};

export default TableHeader;
