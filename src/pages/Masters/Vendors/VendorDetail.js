import { useEffect } from 'react';
import { Form, Col, Card, Row, Tab, Nav, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch, } from 'react-redux';
import { useHistory } from 'react-router-dom';
import verifyVendor from '../../../App/components/Vendor/Functions/VerifyVerification';
import { CHANGE_BREADCRUMB_TITLE } from '../../../store/actions';
import AnimalsTable from './Tabs/Animals';
import DocumentsTable from './Tabs/DocumentsTable';
import Main from './Tabs/Main';
import PoliTable from './Tabs/Poli';
import SchedulesTable from './Tabs/Schedules';
import TreatmentsTable from './Tabs/Treatments';

const VendorDetail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const vendor = props.location.vendor;
  // const { data: vendor, status, error } = useFetch(`${base_url}/admin/vendor/${id}`);

  useEffect(() => {
    dispatch(CHANGE_BREADCRUMB_TITLE("Vendor Detail"));
    if (!vendor) {
      history.push("/masters/vendors");
    }

    return () => {
      dispatch(CHANGE_BREADCRUMB_TITLE(""));
    }
  }, []);

  const handleVerify = async (e, id) => {
    e.preventDefault();

    await verifyVendor(id);
    history.push("/masters/vendors", "refetch");
  };

  const handleReject = async (e, id) => {
    e.preventDefault();

    await verifyVendor(id, "reject");
    history.push("/masters/vendors", "refetch");
  };

  const disabledVerifyButton = (
    <OverlayTrigger
      placement="left"
      overlay={
        <Tooltip>
          You've already decided on an action on this vendor
        </Tooltip>
      }
    >
      <span className="inline float-right">
        <Button size="sm" disabled style={{ pointerEvents: "none" }}>Approve</Button>
        <Button size="sm" variant="danger" disabled style={{ pointerEvents: "none" }}>Reject</Button>
      </span>
    </OverlayTrigger>
  );

  if (vendor) {
    return (
      
        <Form>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title className="inline" as="h5">Vendor Detail</Card.Title>
                {
                  vendor.isVerified
                    ? disabledVerifyButton
                    : <>
                      <Button
                        size="sm"
                        variant="danger"
                        className="inline float-right"
                        onClick={e => handleReject(e, vendor._id)}
                      >Reject</Button>
                      <Button
                        size="sm"
                        className="inline float-right"
                        onClick={e => handleVerify(e, vendor._id)}
                      >Approve</Button>
                    </>
                }
              </Card.Header>
              <Card.Body>
                <Tab.Container defaultActiveKey="home">
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="home">Main</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="docs">Documents</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="animals">Animals</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="treatments">Medical Treatments</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="poli">Poli</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="schedules">Block Schedules</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="home">
                          <Main vendor={vendor} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="docs">
                          <DocumentsTable certificates={vendor.certificates} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="animals">
                          <AnimalsTable />
                        </Tab.Pane>
                        <Tab.Pane eventKey="treatments">
                          <TreatmentsTable />
                        </Tab.Pane>
                        <Tab.Pane eventKey="poli">
                          <PoliTable />
                        </Tab.Pane>
                        <Tab.Pane eventKey="schedules">
                          <SchedulesTable />
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Card.Body>
            </Card>
          </Col>
        </Form>
      
    )
  } else {
    return null;
  }
};

export default VendorDetail;