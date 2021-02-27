import { Card, Table } from "react-bootstrap";

const Address = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h3">Address</Card.Title>
      </Card.Header>
      <Card.Body>
        <Table hover striped responsive>
          <thead>
            <tr>
              <th className="align-middle">#</th>
              <th className="align-middle">Name</th>
              <th className="align-middle">Age</th>
              <th className="align-middle">Gender</th>
            </tr>
          </thead>
          <tbody>
            {
              [{ name: "Saturn", age: "3", gender: "Female" }, { name: "Neptune", age: "6", gender: "Male" }].map((content, i) => {
                return (
                  <tr key={i}>
                    <th className="align-middle">{i + 1}</th>
                    <td className="align-middle">{content.name}</td>
                    <td className="align-middle">{content.age}</td>
                    <td className="align-middle">
                      {content.gender}
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
};

export default Address;
