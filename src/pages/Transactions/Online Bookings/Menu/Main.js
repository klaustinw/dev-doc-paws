import { Card, Row } from "react-bootstrap";
import ReadOnlyColumn from "../../../../App/components/ReadOnlyColumn";

const Main = ({ booking }) => {
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
          <ReadOnlyColumn data={{ name: "Statement", value: booking.statement }} />
          <ReadOnlyColumn data={{ name: "Status Order", value: translate_transaction_status_code(booking.status) }} />
          <ReadOnlyColumn data={{ name: "Member", value: booking.member }} />
          <ReadOnlyColumn data={{ name: "Comment", value: booking.comment }} />
          <ReadOnlyColumn data={{ name: "Diagnose", value: booking.diagnose }} />
          <ReadOnlyColumn data={{ name: "Rating", value: booking.rating }} />
          <ReadOnlyColumn data={{ name: "Time Start", value: booking.timeStart }} />
          <ReadOnlyColumn data={{ name: "Time End", value: booking.timeEnd }} />
        </Row>
      </Card.Body>
    </Card>
  )
};

export default Main;
