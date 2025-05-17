import "./Navs.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
function Navs() {
  return (
    <section className="nav-bar">
      <Navbar expand="lg" className="nav-bar">
        <Container>
          <a className="mentor-brand" href="#home">
            Mentor
          </a>
          <Navbar.Toggle
            className="open-list"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="menu-list">
              <Nav.Link className="menu-item" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="menu-item" href="#link">
                About
              </Nav.Link>
              <Nav.Link className="menu-item" href="#link">
                Courses
              </Nav.Link>
              <Nav.Link className="menu-item" href="#link">
                Trainers
              </Nav.Link>
              <Nav.Link className="menu-item" href="#link">
                Events
              </Nav.Link>
              <Nav.Link className="menu-item" href="#link">
                Pricing
              </Nav.Link>
              <Nav.Link className="menu-item" href="#link">
                Contact
              </Nav.Link>
              <Button className="get-started-btn">Get Started</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
    // End Navbar
  );
}

export default Navs;
