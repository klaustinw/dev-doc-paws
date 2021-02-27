import { Card, Col, Row } from "react-bootstrap"
import ReadOnlyColumn from "../../../../App/components/ReadOnlyColumn"

const Main = ({ vendor }) => {
  function translate_verification_status(code) {
    switch (code) {
      case 0:
        return "Unverified";
      case 1:
        return "Approved";
      case 2:
        return "Rejected";
      default:
        return "Unknow code";
    }
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h3">Main</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs="3">
            <img src={vendor.image || "https://img2.wikia.nocookie.net/__cb20130511180903/legendmarielu/images/b/b4/No_image_available.jpg"} />
          </Col>
          <Col xs="9">
            <Row>
              <ReadOnlyColumn data={{ name: "Name", value: vendor.name }} />
              <ReadOnlyColumn data={{ name: "Phone", value: vendor.phone }} />
              <ReadOnlyColumn data={{ name: "Member", value: vendor.member }} />
              <ReadOnlyColumn data={{ name: "Verification Status", value: translate_verification_status(vendor.isVerified) }} />
              <ReadOnlyColumn data={{ name: "Type", value: vendor.type }} />
              <ReadOnlyColumn data={{ name: "Latitude", value: vendor.lat }} />
              <ReadOnlyColumn data={{ name: "Longtitude", value: vendor.long }} />
              <ReadOnlyColumn data={{ name: "Address", value: vendor.addressDetail }} />
              <ReadOnlyColumn data={{ name: "Total Room", value: vendor.totalRoom }} />
              <ReadOnlyColumn data={{ name: "Categories", value: vendor.categories.name }} />
              <ReadOnlyColumn data={{ name: "Province", value: vendor.province }} />
              <ReadOnlyColumn data={{ name: "City", value: vendor.city }} />
              <ReadOnlyColumn data={{ name: "Ops Start", value: vendor.opsStart }} />
              <ReadOnlyColumn data={{ name: "Ops End", value: vendor.opsEnd }} />
              <ReadOnlyColumn data={{ name: "Duration", value: vendor.duration }} />
              <ReadOnlyColumn data={{ name: "Rest", value: vendor.rest }} />
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
};

export default Main;
