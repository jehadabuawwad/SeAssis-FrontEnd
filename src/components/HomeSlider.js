import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
export default class HomeSlider extends Component {
  render() {
    return (
      <div style={{marginBottom:50 }}>
        <Carousel ariant='dark'>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://p1.pxfuel.com/preview/124/583/785/auto-accident-car-accident-traffic-accident-fire-exercise.jpg'
              alt='First slide'
              fluid
            />
            <Carousel.Caption>
              <h5 style={{ color: 'white' }}>First slide label</h5>
              <p style={{ color: 'white' }}>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Busy_Bees_Cleaning_Services.jpg'
              alt='Second slide'
            />
            <Carousel.Caption>
              <h5 style={{ color: 'Gray' }}>Second slide label</h5>
              <p style={{ color: 'Gray' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
