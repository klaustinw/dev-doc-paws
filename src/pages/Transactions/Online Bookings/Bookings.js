import { useState } from "react";
import { Col, Row, Card, Table, Button, Form, FormControl } from "react-bootstrap";
import { NavLink, useRouteMatch } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../../App/components/Loading";
import useFetch from "../../../App/hooks/useFetch";
import { base_url } from "../../../variables";
import TableFooter from "../../../App/components/TableFooter";
import fetchPost from "../../../App/components/fetchPost";

const Bookings = () => {
  const match = useRouteMatch();
  const [isSubmitting, setSubmitting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(10);
  const {
    data: {
      docs: transcations,
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
  } = useFetch(`${base_url}/admin/booking?page=${currentPage}&limit=${currentLimit}`);

  function convert_date(date) {
    return `${new Date(date).getDate()}/${new Date(date).getMonth()}/${new Date(date).getFullYear()}`;
  }

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

  const handleFilter = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Filter",

    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  const continuousClick = () => {
    return Swal.fire("Please Wait", "Requests can take up one or two seconds to complete", "info");
  }

  const handleButton = (e, id, isApproved) => {
    if (isSubmitting) {
      return continuousClick();
    }

    async function main() {
      const action = isApproved ? "approve" : "reject";
      const result = await Swal.fire({
        title: "Confirm Action",
        text: `Are you sure to ${action} this payment?`,
        icon: "warning",
        showCancelButton: true
      });
      if (!result.isConfirmed) return;
      setSubmitting(true);
      await fetchPost("/admin/booking/action", { id, action });
      setSubmitting(false);
      refetch();
    }
    main();
  }

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Online Bookings List</Card.Title>
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
              <Button variant="outline-primary" onClick={handleSearch}>Search</Button>
              <Button className="float-right" variant="primary" onClick={handleFilter}>
                Filter
              </Button>
            </Form>
            {
              status == "success"
                ? <>
                  <Table striped responsive hover className="mt-3">
                    <thead>
                      <tr>
                        <th className="align-middle">#</th>
                        <th className="align-middle">User</th>
                        <th className="align-middle">Vendor</th>
                        <th className="align-middle">Nama Hewan</th>
                        <th className="align-middle">Tanggal</th>
                        <th className="align-middle">Status Order</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        transcations.map((transaction, i) => {
                          return (
                            <tr key={transaction._id}>
                              <th className="align-middle" scope="row">{pagingCounter + i}</th>
                              <td className="align-middle">{transaction.user.name}</td>
                              <td className="align-middle">{transaction.vendor.name}</td>
                              <td className="align-middle">{transaction.pets ? transaction.pets.name : "None"}</td>
                              <td className="align-middle">{transaction.created_at ? convert_date(transaction.created_at) : "None"}</td>
                              <td className="align-middle">{translate_transaction_status_code(transaction.status)}</td>
                              <td className="text-center">
                                <NavLink
                                  to={{
                                    pathname: `${match.url}/detail/${transaction._id}`,
                                    tableRefetch: refetch
                                  }}
                                ><Button size="sm" variant="warning">Detail</Button></NavLink>
                                <Button
                                  onClick={e => handleButton(e, transaction._id, true)}
                                  disabled={transaction.status == 4 ? false : true}
                                  variant="primary"
                                  size="sm"
                                >Approve</Button>
                                <Button
                                  onClick={e => handleButton(e, transaction._id, false)}
                                  disabled={transaction.status == 4 ? false : true}
                                  variant="danger"
                                  size="sm"
                                >Reject</Button>
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

export default Bookings;
