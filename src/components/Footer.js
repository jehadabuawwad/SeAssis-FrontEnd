import React, { Component } from 'react';
import { Navbar, Col, Row } from 'react-bootstrap';
export default class Footer extends Component {
  render() {
    return (
      <Row fluid>
        <Col md={{ span: 8, offset: 0 }}>
          <Navbar
            expand='lg'
            style={{
              backgroundColor: '#343F56',
              margin: -25,
              height: 120,
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
        <Col md={{ span: 4, offset: 0 }}>
          <Navbar
            expand='lg'
            style={{
              backgroundColor: '#343F56',
              margin: -25,
              height: 120,
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
            <Navbar.Brand href='/Feedback'>Feedback</Navbar.Brand>
            <Navbar.Brand href='/AboutUs'>About Us</Navbar.Brand>
            <Navbar.Brand>
              <p style={{ marginLeft:40, fontSize: '20px', height: 15, padding: 10 }}>
                Email: SeAssis@outlook.com
              </p>
              <p style={{ marginLeft:40,fontSize: '20px', height: 15, padding: 10 }}>
                Contact Us: +962 78 7002130
              </p>
            </Navbar.Brand>
          </Navbar>
        </Col>
      </Row>
    );
  }
}
