import "../components/Navbar.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../images/insta.png";

export const Navbar = () => {
  return (
    <Container id="navbar">
      <Nav className="me-auto">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="link">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/login" className="link">
            Login
          </Link>
        </div>
      </Nav>
    </Container>
  );
};
