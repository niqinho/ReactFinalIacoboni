import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to='/'>Dolce Tentazioni</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/categoria/tortas'>Tortas</Nav.Link>
            <Nav.Link as={NavLink} to='/categoria/postres'>Postres</Nav.Link>
            <Nav.Link as={NavLink} to='/categoria/finas'>Finas</Nav.Link>
          </Nav>
          <NavLink to= "/cart"> <CartWidget/> </NavLink>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;