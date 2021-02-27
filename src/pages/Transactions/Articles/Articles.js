import { useEffect, useState } from "react";
import { Button, Card, Col, Form, FormControl, Pagination, Row, Table } from "react-bootstrap";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../../App/components/Loading";
import SpecialToggleButton from "../../../App/components/SpecialToggleButton";
import TableFooter from "../../../App/components/TableFooter";
import TableHeader from "../../../App/components/TableHeader";
import useFetch from "../../../App/hooks/useFetch";
import { base_url } from "../../../variables";

const Articles = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [currentLimit, setCurrentLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: {
      docs: articles,
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
  } = useFetch(`${base_url}/admin/article?page=${currentPage}&limit=${currentLimit}`);

  useEffect(() => {
    if (history.location.state) refetch();
  }, []);

  const handlePreview = (html) => {
    Swal.fire({
      html: html,
      width: "75%"
    });
  };

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Articles List</Card.Title>
            {/* <span className="d-block m-t-5">use props <code>striped</code> with <code>Table</code> component</span> */}
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
                        <th className="align-middle">Title</th>
                        <th className="align-middle">Description</th>
                        <th className="align-middle">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        articles.map((article, i) => {
                          return (
                            <tr key={article._id}>
                              <th className="align-middle" scope="row">{pagingCounter + i}</th>
                              <td className="align-middle">{article.title}</td>
                              <td className="align-middle">
                                <Button variant="link" size="sm" onClick={e => handlePreview(article.description)}>
                                  Preview
                                </Button>
                              </td>
                              <td className="align-middle">
                                <Link
                                  to={{
                                    pathname: `${match.url}/edit`,
                                    article
                                  }}
                                ><Button size="sm" variant="primary">Edit</Button></Link>
                                <SpecialToggleButton />
                              </td>
                            </tr>
                          )
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

export default Articles;
