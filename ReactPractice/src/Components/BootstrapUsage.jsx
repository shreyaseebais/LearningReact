import Button from "react-bootstrap/Button";
import { Navbar, Nav ,NavDropdown, Container } from "react-bootstrap";


function BootstrapUsage() {
  return (
    <div>
      <h3>Bootstrap usage :</h3>
      <div>NAVBAR </div>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <h1>-----------------</h1>
      <button>HTML button</button>
      <Button onClick={() => alert("A bootstrap button ")}>
        Bootstrap button
      </Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
    </div>
  );
}

export default BootstrapUsage;
