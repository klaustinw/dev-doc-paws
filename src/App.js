import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button
} from "react-bootstrap";
import Articles from './pages/Articles';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="pr-5 pl-5" bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">
              Doc Paws
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/articles">
                  Articles
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <Button variant="outline-success">Login</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/articles">
            <Articles />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
