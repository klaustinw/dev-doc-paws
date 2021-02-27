import { Card, Table } from "react-bootstrap"

const DocumentsTable = ({ certificates }) => {
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h3">Documents</Card.Title>
      </Card.Header>
      <Card.Body>
        <Table hover striped responsive>
          <thead>
            <tr>
              <th className="align-middle">#</th>
              <th className="align-middle">Name</th>
              <th className="align-middle">Link</th>
            </tr>
          </thead>
          <tbody>
            {
              certificates.map((content, i) => {
                return (
                  <tr key={i}>
                    <th className="align-middle">{i + 1}</th>
                    <td className="align-middle">Document {i + 1}</td>
                    <td className="align-middle">
                      <a href={content}>
                        Download
                      </a>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default DocumentsTable;
