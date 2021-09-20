import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
class HomeServiceForm extends Component {
  render() {
    return (
      <>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Name : </Form.Label>
            <Form.Control type='text' placeholder='Enter your name' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Button variant='primary'>Get Your Location !</Button>
            <Form.Control type='text' placeholder='Add description' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Phone number</Form.Label>
            <Form.Control type='text' placeholder='Enter phone number' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Problem Description :</Form.Label>
            <Form.Control type='text' placeholder='Whats youre problem ?' />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Ask for help !
          </Button>
        </Form>
      </>
    );
  }
}
export default HomeServiceForm;
