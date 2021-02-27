import { Card, Col, Form, Row, Table, Button } from 'react-bootstrap';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import useFetch from "../../../App/hooks/useFetch";
import { base_url } from '../../../variables';
import Loading from "../../../App/components/Loading";
import { useEffect, useState } from 'react';
import TableFooter from '../../../App/components/TableFooter';
import SpecialToggleButton from '../../../App/components/SpecialToggleButton';
import TableHeader from '../../../App/components/TableHeader';

const MedicalTreatment = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [currentLimit, setCurrentLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: {
      docs: mts,
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
  } = useFetch(`${base_url}/admin/mt?page=${currentPage}&limit=${currentLimit}`);

  useEffect(() => {
    if (history.location.state) refetch();
  }, []);

  return (

    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Medical Treatments List</Card.Title>
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
                ?
                <>
                  <Table striped responsive hover className="mt-3">
                    <thead>
                      <tr>
                        <th className="align-middle">#</th>
                        <th className="align-middle">Name</th>
                        <th className="align-middle">Type</th>
                        <th className="align-middle">Status</th>
                        <th className="align-middle">Detail</th>
                        <th className="align-middle">Actions</th>

                      </tr>
                    </thead>
                    <tbody>
                      {mts.map((item, i) => {
                        return (
                          <tr key={i}>
                            <th className="align-middle" scope="row">{pagingCounter + i}</th>
                            <td className="align-middle">{item.name}</td>
                            <td className="align-middle">{item.detail}</td>
                            <td className="align-middle">{item.status}</td>
                            <td className="align-middle">{item.type}</td>
                            <td className="align-middle">
                              <Button size="sm" variant="primary" onClick={e => history.push(`${match.url}/edit/${item._id}`, { item })}>
                                Edit
                              </Button>
                              <SpecialToggleButton isActive={true} />
                            </td>
                          </tr>
                        );
                      })}
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

export default MedicalTreatment;
