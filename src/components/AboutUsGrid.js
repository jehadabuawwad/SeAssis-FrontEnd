import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import SamahImage from '../media/images/samah.jpg';
import IbrahemImage from '../media/images/ibrahem.jpg';
import EhabImage from '../media/images/ehab.jpg';
import JehadImage from '../media/images/jehad.jpg';
import GharamImage from '../media/images/gharam.jpg';
import AhmadImage from '../media/images/ahmad.jpg';

export default class AboutUsGrid extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 0 }}>
              <div class='card'>
                <div class='box'>
                  <div class='content'>
                    <i class='fab fa-python'></i>
                    <Image
                     
                      className='d-block w-100'
                      src={JehadImage}
                      alt='RoadService'
                      fluid
                    />
                    <h3>Team Leader</h3>
                    <p>Jehad Abu Awwad</p>
                    <a href='https://www.linkedin.com/in/jehadabuawwad/'>Profile</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 0 }}>
              <div class='card'>
                <div class='box'>
                  <div class='content'>
                    <i class='fab fa-java'></i>
                    <Image
                      className='d-block w-100'
                      style={{ width: 500 }}
                      src={SamahImage}
                      alt='RoadService'
                      fluid
                      rounded
                    />
                    <h3>First Member</h3>
                    <p>Samah Hamed</p>
                    <a href='https://www.linkedin.com/in/samah-hamed-948579171/'>Profile</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 0 }}>
              <div class='card'>
                <div class='box'>
                  <div class='content'>
                    <i class='fab fa-java'></i>
                    <Image
                      className='d-block w-100'
                      style={{ width: 500 }}
                      src={IbrahemImage}
                      alt='RoadService'
                      fluid
                      rounded
                    />
                    <h3>Second Member</h3>
                    <p>Ibrahim Bader</p>
                    <a href='https://www.linkedin.com/in/ibrahim-bader-35aa09164/'>Profile</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 0 }}>
              <div class='card'>
                <div class='box'>
                  <div class='content'>
                    <i class='fab fa-java'></i>
                    <Image
                      className='d-block w-100'
                      style={{ width: 500 }}
                      src={EhabImage}
                      alt='RoadService'
                      fluid
                      rounded
                    />
                    <h3>Third Member</h3>
                    <p>Ehab Ahmad</p>
                    <a href='https://www.linkedin.com/in/ehab-ahmad-748848162/'>Profile</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 0 }}>
              <div class='card'>
                <div class='box'>
                  <div class='content'>
                    <i class='fab fa-java'></i>
                    <Image
                      className='d-block w-100'
                      style={{ width: 500 }}
                      src={AhmadImage}
                      alt='RoadService'
                      fluid
                      rounded
                    />
                    <h3>Fourth Member</h3>
                    <p>Ahmad AbuTaifor</p>
                    <a href='https://www.linkedin.com/mwlite/in/ahmad-abuteifor-465647216'>Profile</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 0 }}>
              <div class='card'>
                <div class='box'>
                  <div class='content'>
                    <i class='fab fa-java'></i>
                    <Image
                      className='d-block w-100'
                      style={{ width: 500 }}
                      src={GharamImage}
                      alt='RoadService'
                      fluid
                      rounded
                    />
                    <h3>Fifth Member</h3>
                    <p>Gharam</p>
                    <a href='https://www.linkedin.com/in/gharam-alessa-4449901b9/'>Profile</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
