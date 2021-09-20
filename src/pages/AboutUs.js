import React, { Component } from 'react';
import AboutUsGrid from '../components/AboutUsGrid';
import AboutUsCard from '../components/AboutUsCard';
import { Container, Col, Row } from 'react-bootstrap';
export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 0 }}>
              <AboutUsCard />
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 0 }}></Col>
            <AboutUsGrid />
            <Col />
          </Row>
        </Container>
      </div>
    );
  }
}
