import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function AppNavbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    
    const authLinks = (
    <>
      <Nav.Link as={Link} to="/Todo">My Todos</Nav.Link>
      <NavDropdown title={user?.username || 'Profile'} id="basic-nav-dropdown">
        <NavDropdown.Item onClick={handleLogout}>
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );

  const guestLinks = (
    <>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      <Nav.Link as={Link} to="/register">Register</Nav.Link>
    </>
  );

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          📝 To-Do-List 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            {user ? authLinks : guestLinks}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default AppNavbar;
// This code defines a Navbar component that provides navigation links to different pages of the portfolio.
