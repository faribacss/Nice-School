import "./Header.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { motion } from "framer-motion";
function Header() {
  return (
    <section className="header">
      <Navbar expand="lg" className="nav-bar">
        <Container>
          <Navbar.Brand className="mentor-brand" href="#home">
            Mentor
          </Navbar.Brand>
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
      <div className="hero-body">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Learning Today, <br /> Leading Tomorrow
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          We are team of talented designers making websites with Bootstrap
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <button className="started-btn">Get Started</button>
        </motion.div>
      </div>
    </section>
    // End Header
  );
}

export default Header;
