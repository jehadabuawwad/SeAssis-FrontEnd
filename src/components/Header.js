import React, { Component } from 'react';
import { Container, Col, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Logo from '../media/images/Logo.png';
export default class Header extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar
            fixed='top'
            collapseOnSelect
            style={{
              backgroundColor: '#343F56',
              fontSize: 20,
              height: 100,
            }}
            variant='dark'
          >
            <Col xs={{ span: 0 }}>
              <Image
                style={{
                  width: 'auto',
                  height: 200,
                  marginLeft: -60,
                }}
                src={Logo}
                rounded
              />
            </Col>
            <Col
              style={{
                marginLeft: -75,
              }}
              xs={{ span: 2, offset: 0 }}
              md={{ span: 2, offset: 0 }}
            >
              <NavItem>
                <Link style={{ color: 'white' }} className='nav-link' to='/'>
                  Home
                </Link>
              </NavItem>
            </Col>
            <Col
              xs={{ span: 1, offset: 0 }}
              style={{ marginLeft: -30 }}
              md={{ span: 2, offset: 0 }}
            >
              <NavDropdown title='Services'>
                <NavDropdown.Item href='/HomeServices'>
                  Home Services
                </NavDropdown.Item>
                <NavDropdown.Item href='/RoadServices'>
                  Road Services
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col xs={{ span: 2, offset: 1 }} md={{ span: 2, offset: 0 }}>
              <NavItem>
                <Link
                  style={{ color: 'white',marginLeft: 5 }}
                  className='nav-link'
                  to='/Requests'
                >
                  Requests
                </Link>
              </NavItem>
            </Col>

            <Col xs={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }}>
              <NavItem>
                <Link
                  style={{ color: 'white',marginLeft: 10 }}
                  className='nav-link'
                  to='/Feedback'
                >
                  Feedback
                </Link>
              </NavItem>
            </Col>
            <Col xs={{ span: 4, offset: 0 }} md={{ span: 3, offset: 0 }}>
              <NavItem>
                <Link
                  style={{ color: 'white',marginLeft: 10 }}
                  className='nav-link'
                  to='/AboutUs'
                >
                  About Us
                </Link>
              </NavItem>
            </Col>
          </Navbar>
        </Container>
      </div>
    );
  }
}
