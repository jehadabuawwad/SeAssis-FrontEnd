import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
export default class FeedbackSlider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.Feedbacks.length ? (
          <Row>
            <Col md={{ span: 0, offset: 0 }}>
              <Carousel itemsToShow={this.props.Feedbacks.length}>
                {this.props.Feedbacks.map((element) => {
                  return (
                    <Carousel.Item interval={3000}>
                      <img
                        className="d-block w-100"
                        src="https://c1.wallpaperflare.com/preview/696/379/736/feedback-exchange-of-ideas-debate-discussion.jpg"
                        rounded
                        // style={{height:500,width:400}}
                      />
                      <Carousel.Caption style={{ color: "white" }}>
                        <h3>{element.name}</h3>
                        <p>{element.feedback}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        ) : (
          <div>
            <h2 style={{ marginTop: 50 }}>Book Collection is Empty</h2>
          </div>
        )}
      </>
    );
  }
}
