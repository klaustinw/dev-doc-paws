import { useState } from 'react';
import { Button, Card, Col, Form, FormControl, Row, Table } from 'react-bootstrap';
import { NavLink, useRouteMatch } from 'react-router-dom';
import Loading from '../../../App/components/Loading';
import SpecialToggleButton from '../../../App/components/SpecialToggleButton';
import TableFooter from '../../../App/components/TableFooter';
import useFetch from '../../../App/hooks/useFetch';
import { base_url } from '../../../variables';

const Users = () => {
  const match = useRouteMatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(10);
  const {
    data: {
      docs: users,
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
  } = useFetch(`${base_url}/admin/user?page=${currentPage}&limit=${currentLimit}`);

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Users List</Card.Title>
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
              <Button className="float-right" variant="primary">Filter</Button>
            </Form>
            {
              status == "success"
                ? <>
                  <Table striped responsive hover className="mt-3">
                    <thead>
                      <tr>
                        <th className="align-middle">#</th>
                        <th className="align-middle">Name</th>
                        <th className="align-middle">Email</th>
                        <th className="align-middle">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        users.map((user, i) => {
                          return (
                            <tr key={user._id}>
                              <th className="align-middle" scope="row">{pagingCounter + i}</th>
                              <td className="align-middle">{user.name}</td>
                              <td className="align-middle">{user.email}</td>
                              <td className="align-middle">
                                <NavLink
                                  to={{
                                    pathname: `${match.url}/detail`,
                                    user
                                  }}
                                ><Button size="sm" variant="warning">Detail</Button></NavLink>
                                <SpecialToggleButton isActive={true} />
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
