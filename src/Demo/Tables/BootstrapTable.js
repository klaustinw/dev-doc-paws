import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class BootstrapTable extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Basic Table</Card.Title>
                                <span className="d-block m-t-5">use bootstrap <code>Table</code> component</span>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th className="align-middle">#</th>
                                            <th className="align-middle">First Name</th>
                                            <th className="align-middle">Last Name</th>
                                            <th className="align-middle">Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="align-middle">Mark</td>
                                            <td className="align-middle">Otto</td>
                                            <td className="align-middle">@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td className="align-middle">Jacob</td>
                                            <td className="align-middle">Thornton</td>
                                            <td className="align-middle">@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td className="align-middle">Larry</td>
                                            <td className="align-middle">the Bird</td>
                                            <td className="align-middle">@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Hover Table</Card.Title>
                                <span className="d-block m-t-5">use props <code>hover</code> with <code>Table</code> component</span>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th className="align-middle">#</th>
                                            <th className="align-middle">First Name</th>
                                            <th className="align-middle">Last Name</th>
                                            <th className="align-middle">Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="align-middle">Mark</td>
                                            <td className="align-middle">Otto</td>
                                            <td className="align-middle">@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td className="align-middle">Jacob</td>
                                            <td className="align-middle">Thornton</td>
                                            <td className="align-middle">@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td className="align-middle">Larry</td>
                                            <td className="align-middle">the Bird</td>
                                            <td className="align-middle">@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Striped Table</Card.Title>
                                <span className="d-block m-t-5">use props <code>striped</code> with <code>Table</code> component</span>
                            </Card.Header>
                            <Card.Body>
                                <Table hover striped responsive>
                                    <thead>
                                        <tr>
                                            <th className="align-middle">#</th>
                                            <th className="align-middle">First Name</th>
                                            <th className="align-middle">Last Name</th>
                                            <th className="align-middle">Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="align-middle">Mark</td>
                                            <td className="align-middle">Otto</td>
                                            <td className="align-middle">@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td className="align-middle">Jacob</td>
                                            <td className="align-middle">Thornton</td>
                                            <td className="align-middle">@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td className="align-middle">Larry</td>
                                            <td className="align-middle">the Bird</td>
                                            <td className="align-middle">@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BootstrapTable;