import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg='red' variant='light' >
          <Container >
            <Navbar.Brand style={{ marginRight: '500px' }} href='/' >Seasse</Navbar.Brand>

            <Nav  className="me-auto">

              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Requests">Requests</Nav.Link>
              <Nav.Link href="/Feedback">Feedback</Nav.Link>
              <Nav.Link href="/AboutUs">About Us</Nav.Link>
            </Nav>
            <NavDropdown style={{ color:'red' }} title='Services' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='/HomeServices'>
                Home Services
              </NavDropdown.Item>
              <NavDropdown.Item href='/RoadServices'>
                Road Services
              </NavDropdown.Item>
            </NavDropdown>


            {/* <Navbar.Brand href='/Requests'>Requests</Navbar.Brand>
            <Navbar.Brand href='/Feedback'>Feedback</Navbar.Brand>
            <Navbar.Brand href='/AboutUs'>About Us</Navbar.Brand> */}
          </Container>
        </Navbar>
      </div>
    );
  }
}
