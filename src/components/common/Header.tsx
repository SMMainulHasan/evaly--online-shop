import { Container, Nav, Navbar } from "react-bootstrap";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

function Header() {
  return (
    <div className="header__component">
      <div className="top-header py-1 bg-light border-bottom">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex gap-4">
            <li>
              <BiPhoneCall />
              <a href="tel: o1701330261">o1701330261</a>
            </li>
            <li>
              <FiMail />
              <a href="mail-to: support@evaly.com">support@evaly.com</a>
            </li>
          </ul>
          <div>
            <a href="https://play.google.com/store/apps/details?id=bd.com.fvaly.fvalyshop">
              Save big on our app!
            </a>
          </div>
        </Container>
      </div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
