import { Button, Card, Col, Row, Table } from "react-bootstrap";

const PaymentProof = ({ data }) => {
  return (
    <>
      <>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Payment Proofs</Card.Title>
              </Card.Header>
              <Card.Body className="pt-3">

                <Table striped responsive hover className="mt-3">
                  <thead>
                    <tr>
                      <th className="align-middle">#</th>
                      <th className="align-middle">Name</th>
                      <th className="align-middle">Document</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((item, i) => {
                        return (
                          <tr key={i}>
                            <th className="align-middle" scope="row">{1 + i}</th>
                            <td className="align-middle">Document {i + 1}</td>
                            <td className="align-middle">
                              <a
                                href={item}
                              ><Button size="sm" variant="link">Download</Button></a>
                            </td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </Table>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    </>
  );
};

export default PaymentProof;
