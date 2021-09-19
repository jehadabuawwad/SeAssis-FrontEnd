import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
export default class FeedbackSlider extends Component {
  render() {
    return (
      <div style={{ marginBottom: 50 }}>
        <Carousel ariant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://via.placeholder.com/640x360"
              alt="First slide"
              fluid
            />
            <Carousel.Caption>
              <h1 style={{ color: "white" }}>Road Service</h1>
              <p style={{ color: "white" }}>test1 </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://via.placeholder.com/640x360"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1 style={{ color: "white" }}>Home Service</h1>
              <p style={{ color: "white" }}>test2</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
