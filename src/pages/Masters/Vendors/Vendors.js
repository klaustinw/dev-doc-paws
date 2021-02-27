import { useEffect, useState } from "react";
import { Card, Col, Row, Table, Button, Form, FormControl } from "react-bootstrap";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import Loading from "../../../App/components/Loading";
import SpecialToggleButton from "../../../App/components/SpecialToggleButton";
import TableFooter from "../../../App/components/TableFooter";
import useFetch from "../../../App/hooks/useFetch";
import { base_url } from "../../../variables";

const Users = () => {
  const history = useHistory()
  const match = useRouteMatch();
  const [currentLimit, setCurrentLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: {
      docs: vendors,
      hasPrevPage,
      hasNextPage,
      page,
      limit,
      pagingCounter,
      totalDocs,
      totalPages
    },
    status,
    refetch
  } = useFetch(`${base_url}/admin/vendor?page=${currentPage}&limit=${currentLimit}`);

  function translate_vendor_type_code(code) {
    switch (code) {
      case 1:
        return "Doctor";
      case 2:
        return "Animal Communicator";
      case 3:
        return "Clinic";
      default:
        return "Unknow code";
    }
  }

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

  useEffect(() => {
    if (history.location.state) refetch();
  }, []);

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Vendors List</Card.Title>
          </Card.Header>
          <Card.Body className="pt-3">

            <Form inline>
              <p>Show&nbsp;</p>
                      <select className="m-b-15" value={currentLimit} id="limit" onChange={e => { setCurrentLimit(e.target.value) }}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
                      <p>&nbsp;rows&nbsp;&nbsp;</p>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
              <Button className="float-right" variant="primary">
                Filter
              </Button>
            </Form>
            {
              status == "success"
                ? <>
                  <Table style={{ height: "30px" }} striped responsive hover className="mt-3">
                    <thead>
                      <tr>
                        <th className="align-middle">#</th>
                        <th className="align-middle">Name</th>
                        <th className="align-middle">Email</th>
                        <th className="align-middle">Phone</th>
                        <th className="align-middle">Verification Status</th>
                        <th className="align-middle">Type</th>
                        <th className="align-middle">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        vendors.map((vendor, i) => {
                          return (
                            <tr key={i}>
                              <th className="align-middle" scope="row">{pagingCounter + i}</th>
                              <td className="align-middle">{vendor.name}</td>
                              <td className="align-middle">{vendor.email}</td>
                              <td className="align-middle">{vendor.phone}</td>
                              <td className="align-middle">{translate_verification_status(vendor.isVerified)}</td>
                              <td className="align-middle">{translate_vendor_type_code(vendor.type)}</td>
                              <td className="align-middle">
                                <NavLink
                                  to={{
                                    pathname: `${match.url}/detail`,
                                    vendor
                                  }}
                                ><Button size="sm" variant="warning">Detail</Button></NavLink>
                                <SpecialToggleButton isActive={false} />
                              </td>
                            </tr>
                          );
                        })
                      }
                    </tbody>
                  </Table>
                </>
                : <Loading />
            }
            <TableFooter data={{
              pagingCounter,
              hasNextPage,
              hasPrevPage,
              currentPage,
              limit,
              page,
              totalDocs,
              totalPages,
              setCurrentPage
            }} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Users;
