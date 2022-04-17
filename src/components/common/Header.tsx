import evaly from "assets/images/evaly.jpg";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { BiPhoneCall, BiSearch } from "react-icons/bi";
import { FiMail, FiShoppingBag, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

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

      <div className="middle-header">
        <Container className="d-flex justify-content-center py-2 gap-5">
          <Link to="/">
            <img className="brand-logo" src={evaly} alt="evaly" />
          </Link>
          <InputGroup>
            <FormControl
              className="border border-primary"
              placeholder="Search here..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2">
              <BiSearch />
            </Button>
          </InputGroup>
          <ul className="icon-list d-flex list-unstyled gap-4">
            <li>
              <Link to="/checkout">
                <FiShoppingBag />
              </Link>
            </li>
            <li>
              <FiUser />
            </li>
          </ul>
        </Container>
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
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
