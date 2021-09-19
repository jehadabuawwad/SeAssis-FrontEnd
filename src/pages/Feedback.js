import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
import '../HomeGrid.css';
export default class Feedback extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Form>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Your Email Address'
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='name' placeholder='Enter Your Name' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type='mobile'
                  placeholder='Enter Your Mobile Number'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Service Type</Form.Label>
                <Form.Control
                  type='serviceType'
                  placeholder='Enter Your Service Type'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                  style={{ height: 100 }}
                  type='feedback'
                  placeholder='Enter Your Feedback'
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
