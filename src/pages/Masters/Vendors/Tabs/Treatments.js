import { Card, Table } from "react-bootstrap"

const TreatmentsTable = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h3">Medical Treatments</Card.Title>
      </Card.Header>
      <Card.Body>
        <Table hover striped responsive>
          <thead>
            <tr>
              <th className="align-middle">#</th>
              <th className="align-middle">Vendor ID</th>
              <th className="align-middle">Medical Treatment ID</th>
              <th className="align-middle">Homecare</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="align-middle" scope="row">1</th>
              <td className="align-middle">None</td>
              <td className="align-middle">None</td>
              <td className="align-middle">Yes</td>
            </tr>
            <tr>
              <th className="align-middle" scope="row">2</th>
              <td className="align-middle">None</td>
              <td className="align-middle">None</td>
              <td className="align-middle">No</td>
            </tr>
            <tr>
              <th className="align-middle" scope="row">3</th>
              <td className="align-middle">None</td>
              <td className="align-middle">None</td>
              <td className="align-middle">No</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default TreatmentsTable;
