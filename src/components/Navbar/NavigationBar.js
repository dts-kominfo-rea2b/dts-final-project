import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background:rgb(231, 234, 235);
  height:80px;
  box-shadow: 1px -2px 5px 1px black;
`;

const StyledBrand = styled(Navbar.Brand)`
  font-size:1.6rem;
`;

const NavigationBar = () => {
  return (
    <StyledNavbar
      expand="lg"
      sticky='top'
      >
      <Container>
        <StyledBrand className='fw-bold' href="#home">Qur&apos;an Online</StyledBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-md-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default NavigationBar;