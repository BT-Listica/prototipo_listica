import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

import Logo_listica from '../assets//Logo-listica.png';

const Menu = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#3888A3' }}>
      <Container>
        <Navbar.Brand href="#">
          <img
            src={Logo_listica}
            width="200"
            height="80"    
            alt="Logo listica"
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link style={{ color: 'white' }} href="#que-hacemos">
            ¿Que hacemos?
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="#portafolio">
            Portafolio
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="#nosotros">
            Nosotros
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="#blog">
            Blog
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="#contactanos">
            Contáctanos
          </Nav.Link>
        </Nav>
        <Form>
          <FormControl
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            style={{ backgroundColor: '#3888A3', color: 'white', borderRadius:'20px' }}
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export default Menu;
