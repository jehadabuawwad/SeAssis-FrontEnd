import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
export default class FeedbackSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPostive: true,
    };
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
                        className='d-block w-100'
                        src='https://images.unsplash.com/photo-1531824475211-72594993ce2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
                        rounded
                        style={{ height: 600, width: 300 }}
                      />
                      <Carousel.Caption
                        style={{
                          color: 'white',
                          marginLeft: '45%',
                          marginBottom: '15%',
                        }}
                      >
                        <p style={{  fontSize: 35,marginBottom:'-10%' }}>User Experince</p>
                        <div>
                          {element.pospol[0] === 'positive'
                            ? (this.state.isPostive = true)
                            : (this.state.isPostive = false)}

                          {this.state.isPostive ? (
                            <p style={{ color: 'green', fontSize: 50 }}>
                              {element.pospol[0]}
                            </p>
                          ) : (
                            <p style={{ color: 'red', fontSize: 50 }}>
                              {element.pospol[0]}
                            </p>
                          )}
                        </div>
                        <p style={{marginTop:'-10%'}}>
                          With Percantage {Math.abs(element.pospol[1]) * 100}%
                        </p>
                      </Carousel.Caption>
                      <Carousel.Caption
                        style={{
                          color: 'white',
                          fontSize: 40,
                          marginBottom: '14%',
                          marginLeft: '-5%',
                          width:500
                        }}
                      >
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
