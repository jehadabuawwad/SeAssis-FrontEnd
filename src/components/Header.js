import React, { Component } from 'react';
import { Col, Container, Navbar, NavDropdown } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Logo from '../media/images/Logo.png';
export default class Header extends Component {
  render() {
    return (
      <Container>
        <Col md={{ span: 0, offset: 0 }}>
          <Navbar
            fixed='top'
            expand='lg'
            style={{
              backgroundColor: '#343F56',
              fontSize: 25,
              height: 125,
              padding: 10,
            }}
            variant='dark'
          >
            <Col md={{ span: 1, offset: 0 }} xs={{ span: 8, offset: 0 }}>
              <Image
                style={{
                  width: 125,
                  height: 125,
                }}
                src={Logo}
                rounded
              />
            </Col>
            <Navbar.Brand href='/'>Home</Navbar.Brand>
            <NavDropdown title='Services' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='/HomeServices'>
                Home Services
              </NavDropdown.Item>
              <NavDropdown.Item href='/RoadServices'>
                Road Services
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand href='/Requests'>Requests</Navbar.Brand>
            <Navbar.Brand href='/Feedback'>Feedback</Navbar.Brand>
            <Navbar.Brand href='/AboutUs'>About Us</Navbar.Brand>
          </Navbar>
        </Col>
      </Container>
    );
  }
}
