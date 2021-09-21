import React, { Component } from 'react';
import { Navbar, Col, Row } from 'react-bootstrap';
export default class Footer extends Component {
  render() {
    return (
      <Row fluid>
        <Col md={{ span: 7, offset: 0 }}>
          <Navbar
            expand='lg'
            style={{
              backgroundColor: '#FF8300',
              margin: -25,
              height: 100,
              shadowColor: '#FFFFF',
              shadowOffset: {
                width: 100,
                height: 100,
              },
              shadowOpacity: 0.12,
              shadowRadius: 500,
            }}
            expand='lg'
            variant='dark'
          >
            <Navbar.Brand>
              <p style={{ fontSize: '25px', height: 50, padding: 10 }}>
                Code Vibes Developer&copy; 2021
              </p>
            </Navbar.Brand>
          </Navbar>
        </Col>
        <Col md={{ span: 5, offset: 0 }}>
          <Navbar
            expand='lg'
            style={{
              backgroundColor: '#F17808',
              margin: -25,
              height: 100,
              shadowColor: '#FF8300',
              shadowOffset: {
                width: 100,
                height: 100,
              },
              shadowOpacity: 0.12,
              shadowRadius: 500,
            }}
            expand='lg'
            variant='dark'
          >
            <Navbar.Brand href='/'>Home</Navbar.Brand>
            <Navbar.Brand href='/HomeServices'>Home Services</Navbar.Brand>
            <Navbar.Brand href='/RoadServices'>Road Services</Navbar.Brand>
            <Navbar.Brand href='/Requests'>Requests</Navbar.Brand>
            <Navbar.Brand href='/Feedback'>Feedback</Navbar.Brand>
            <Navbar.Brand href='/AboutUs'>About Us</Navbar.Brand>
          </Navbar>
        </Col>
      </Row>
    );
  }
}
