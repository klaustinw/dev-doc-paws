import { Card, Table } from "react-bootstrap"

const AnimalsTable = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h3">Animals</Card.Title>
      </Card.Header>
      <Card.Body>
        <Table hover striped responsive>
          <thead>
            <tr>
              <th className="align-middle">#</th>
              <th className="align-middle">First Name</th>
              <th className="align-middle">Last Name</th>
              <th className="align-middle">Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="align-middle" scope="row">1</th>
              <td className="align-middle">Mark</td>
              <td className="align-middle">Otto</td>
              <td className="align-middle">@mdo</td>
            </tr>
            <tr>
              <th className="align-middle" scope="row">2</th>
              <td className="align-middle">Jacob</td>
              <td className="align-middle">Thornton</td>
              <td className="align-middle">@fat</td>
            </tr>
            <tr>
              <th className="align-middle" scope="row">3</th>
              <td className="align-middle">Larry</td>
              <td className="align-middle">the Bird</td>
              <td className="align-middle">@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default AnimalsTable
