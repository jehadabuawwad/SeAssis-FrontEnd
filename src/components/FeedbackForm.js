import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Container } from 'react-bootstrap';
export default class FeedbackForm extends Component {
  render() {
    const mystyle = {

      position: 'absolute',
      right: '27%',
      width: '20%',
    };
    const servicestyle = {

      position: 'absolute',
      right: '27%',
      width: '20%',
      marginTop: '10%',

    };
    const secStyle = {
      position: 'absolute',
      left: '23%',
      width: '20%',
      marginTop: '1px'
    };

    const numStyle = {
      position: 'absolute',
      left: '23%',
      width: ' 20%',
      marginTop: '10%',
    };

    // const diStyle={

    // };
    return (

      <Container>
        <Row>
          {/* <Col md={{ span: 8, offset: 2 }}> */}
          <Form style={{ marginTop: '9%' }} onSubmit={this.props.handelCreateFeedback}>
            <Form.Group style={secStyle} className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control name='name' placeholder='Enter Your Name' />
            </Form.Group>
            <Form.Group style={mystyle} className='mb-3' >
              <Form.Label>Email address</Form.Label>
              <Form.Control

                name='email'
                placeholder='Enter Your Email Address'
              />

            </Form.Group>

            <Form.Group style={numStyle} className='mb-3'>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                name='mobile'
                placeholder='Enter Your Mobile Number'
              />
            </Form.Group>
            <Form.Group style={servicestyle} className='mb-3'>
              <Form.Label>Service Type</Form.Label>
              <Form.Control
                name='serviceType'
                placeholder='Enter Your Service Type'
              />
            </Form.Group>
            <Form.Group style={{ marginTop: '20%', width: '61%', marginLeft: '17%' }} className='mb-3'>
              <Form.Label>Feedback</Form.Label>
              <Form.Control

                style={{ height: 100 }}
                name='feedback'
                placeholder='Enter Your Feedback'
              />
            </Form.Group>
            <Button style={{ marginLeft: '44%' }} variant='warning' type='submit'>
              Submit
            </Button>
          </Form>
          {/* </Col> */}
        </Row>
      </Container >
    );
  }
}
