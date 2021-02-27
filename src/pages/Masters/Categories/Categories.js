import { useEffect, useState } from 'react';
import { Button, Card, Col, Form, FormControl, Row, Table } from 'react-bootstrap';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import Loading from '../../../App/components/Loading';
import SpecialToggleButton from '../../../App/components/SpecialToggleButton';
import TableFooter from '../../../App/components/TableFooter';
import TableHeader from '../../../App/components/TableHeader';
import useFetch from '../../../App/hooks/useFetch';
import { base_url } from '../../../variables';

const Categories = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const [currentLimit, setCurrentLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: {
      docs: categories,
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
  } = useFetch(`${base_url}/admin/category?page=${currentPage}&limit=${currentLimit}`);

  useEffect(() => {
    if (history.location.state) refetch();
  }, []);

  return (

    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Categories List</Card.Title>
          </Card.Header>
          <Card.Body className="pt-3">

            <Form inline className="d-block">
              <Row>
                <TableHeader currentLimit={currentLimit} setCurrentLimit={setCurrentLimit} />
                <Col className="d-flex justify-content-end">
                  <Link to={`${match.url}/create`}>
                    <Button className="float-right" variant="success">
                      + New
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Form>
            {
              status == "success"
                ? <>
                  <Table striped responsive hover className="mt-3">
                    <thead>
                      <tr>
                        <th className="align-middle">#</th>
                        <th className="align-middle">Name</th>
                        <th className="align-middle">Species</th>
                        <th className="align-middle">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        categories.map((category, i) => {
                          return (
                            <tr key={category._id}>
                              <th className="align-middle" scope="row">{pagingCounter + i}</th>
                              <td className="align-middle">{category.name}</td>
                              <td className="align-middle">{category.species}</td>
                              <td className="align-middle">
                                <Button size="sm" variant="primary" onClick={e => history.push(`${match.url}/edit/${category._id}`, { category })}>
                                  Edit
                                </Button>
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

  )
};

export default Categories;
