import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown} from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import LOGO from '../assets/images/LOGO2.png';


function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={LOGO} width={25} height={25}  />
          
          Origin of Civilization
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://app.civi.ink">App</Nav.Link>

            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#teams">Teams</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Dropdown >
                <DropdownToggle class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton">Docs</DropdownToggle>
                <DropdownMenu >
                  {/* <DropdownItem href="#">Learn React</DropdownItem> */}
                  <DropdownItem href="#">Documentation</DropdownItem>
                  <DropdownItem href="#">Tutorials</DropdownItem>
                  <DropdownItem href="#">Paper_en</DropdownItem>
                  <DropdownItem href="#">Paper_zh</DropdownItem>
                  <DropdownItem href="#">Paper_ru</DropdownItem>
                  <DropdownItem href="#">Paper_ko</DropdownItem>
                  <DropdownItem href="#">Paper_jp</DropdownItem>
                  <DropdownItem href="#">Paper_vn</DropdownItem>
                  <DropdownItem href="#">Paper_de</DropdownItem>
                  {/* <DropdownItem href="#">Paper_Arabic</DropdownItem> */}

                </DropdownMenu>
            </Dropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;