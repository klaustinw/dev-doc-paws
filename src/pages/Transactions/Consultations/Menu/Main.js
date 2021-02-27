import { Card, Row } from "react-bootstrap";
import ReadOnlyColumn from "../../../../App/components/ReadOnlyColumn";

const Main = ({ consultation }) => {
  function translate_transaction_status_code(code) {
    switch (code) {
      case 0:
        return "Done";
      case 1:
        return "Requested by User";
      case 2:
        return "Approved by Vendor";
      case 3:
        return "Rejected by Vendor";
      case 4:
        return "Waiting for admin approval";
      case 5:
        return "Transaction valid";
      case 6:
        return "Transaction invalid";
      case 7:
        return "In-chat";
      default:
        return "Unknow code"
    }
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h3">Main</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row>
          <ReadOnlyColumn data={{ name: "Statement", value: consultation.statement }} />
          <ReadOnlyColumn data={{ name: "Status Order", value: translate_transaction_status_code(consultation.status) }} />
          <ReadOnlyColumn data={{ name: "Member", value: consultation.member }} />
          <ReadOnlyColumn data={{ name: "Comment", value: consultation.comment }} />
          <ReadOnlyColumn data={{ name: "Diagnose", value: consultation.diagnose }} />
          <ReadOnlyColumn data={{ name: "Rating", value: consultation.rating }} />
          <ReadOnlyColumn data={{ name: "Time Start", value: consultation.timeStart }} />
          <ReadOnlyColumn data={{ name: "Time End", value: consultation.timeEnd }} />
        </Row>
      </Card.Body>
    </Card>
  )
};

export default Main;
