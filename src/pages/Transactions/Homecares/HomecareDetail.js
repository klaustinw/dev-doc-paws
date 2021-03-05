import { Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import fetchPost from "../../../App/components/fetchPost";
import Loading from "../../../App/components/Loading";
import useFetch from "../../../App/hooks/useFetch";
import { base_url } from "../../../variables";
import Main from "./Menu/Main";
import PaymentProof from "./Menu/PaymentProof";
import Pet from "./Menu/Pet";
import User from "./Menu/User";
import Vendor from "./Menu/Vendor";

const HomecareDetail = (props) => {
  const { id } = useParams();
  const tableRefetch = props.location.tableRefetch;
  const { data, status, refetch } = useFetch(base_url + "/admin/homecare/detail?id=" + id);

  const handleButton = async (action) => {
    const result = await Swal.fire({
      title: "Confirm Action",
      text: `Are you sure to ${action} this payment?`,
      icon: "warning",
      showCancelButton: true
    });
    if (!result.isConfirmed) return;
    await fetchPost("/admin/homecare/action", { id, action: action });
    refetch();
    if (tableRefetch) tableRefetch();
  };

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Homecare Detail</Card.Title>
            <Button
              size="sm"
              variant="danger"
              className="inline float-right"
              disabled={data.status == 4 ? false : true}
              onClick={e => handleButton("reject")}
            >Reject</Button>
            <Button
              size="sm"
              className="inline float-right"
              disabled={data.status == 4 ? false : true}
              onClick={e => handleButton("approve")}
            >Approve</Button>
          </Card.Header>
          <Card.Body className="pt-3">
            <Tab.Container defaultActiveKey="home">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="home">Main</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="proofs">Payment Proof</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Pet">Pet</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="user">User</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="vendor">Vendor</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  {
                    status == "success"
                      ? <Tab.Content className="px-0 py-0">
                        <Tab.Pane eventKey="home">
                          <Main homecare={data} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="proofs">
                          <PaymentProof data={data.paymentProof} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="Pet">
                          <Pet pet={data.pets} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="user">
                          <User user={data.user} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="vendor">
                          <Vendor vendor={data.vendor} />
                        </Tab.Pane>
                      </Tab.Content>
                      : <Loading />
                  }
                </Col>
              </Row>
            </Tab.Container>


          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default HomecareDetail;
