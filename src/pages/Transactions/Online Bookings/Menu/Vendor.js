import { Card, Row, } from "react-bootstrap";
import ReadOnlyColumn from "../../../../App/components/ReadOnlyColumn";

const Vendor = ({ vendor }) => {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title as="h3">Vendor</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <ReadOnlyColumn data={{ name: "Name", value: vendor.name }} />
            <ReadOnlyColumn data={{ name: "Phone", value: vendor.phone }} />
            <ReadOnlyColumn data={{ name: "Member", value: vendor.member }} />
            <ReadOnlyColumn data={{ name: "Verification Status", value: vendor.isVerified ? 'Verified' : 'Unverfied' }} />
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
            <ReadOnlyColumn data={{ name: "Image", value: vendor.image }} />
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Vendor;
