import React, { Component } from "react";
// const btn = document.querySelector('.btn-toggle');
import Image from "react-bootstrap/Image";
// btn.addEventListener('click', function () {
//   document.body.classList.toggle('dark-theme');
// });
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
export default class HomeGrid extends Component {
  render() {
    return (
      <Container  style={{
        marginTop: 50,
        marginLeft:75,
      }}>
        <Row>
          <Col md={{ span: 6, offset: 0 }}>
            <div
             
            >
              <i></i>
              <a href="/RoadServices">
                {" "}
                <Image
                  style={{ width: 500, height: 400 }}
                  src="https://previews.123rf.com/images/kolotype/kolotype1405/kolotype140500001/27994032-young-couple-broken-down-at-the-side-of-a-road-standing-in-front-of-their-car-with-the-hood-up-phoni.jpg"
                  alt="RoadService"
                  fluid
                />
              </a>
              <div
                class="border border-warning"
                style={{
                  width: 500,
                  borderRadius: 10,
                  marginTop: 5,
                  padding:5,
                }}
              >
                <h3>Road Service</h3>
                <p>
                  If You need a guide or help while your traveling by your car
                  or if you lost in the road and you need some fuel or food
                </p>
              </div>
            </div>
          </Col>
          <Col md={{ span: 6, offset: 0 }}>
            <div>
              <div>
                <div>
                  <i></i>
                  <a href="/HomeServices">
                    {" "}
                    <Image
                      style={{ width: 500, height: 400 }}
                      src="https://bh-aws-media.s3-accelerate.amazonaws.com/2018/11/Miele_Housekeeping_2.jpg"
                      alt="RoadService"
                      fluid
                      rounded
                    />
                  </a>
                  <div
                    class="border border-warning"
                    style={{
                      width: 500,
                      borderRadius: 10,
                      marginTop: 5,
                      padding:5,
                    }}
                  >
                    <h3>Home Services</h3>
                    <p>
                    If you need a help in daily
                     routine home tasks or if you need to solve plumping 
                     electrical issues in your home we can help you 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
