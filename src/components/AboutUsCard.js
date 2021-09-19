import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Team from '../media/images/team.jpg';
import '../HomeGrid.css';
export default class AboutUsCard extends Component {
  render() {
    return (
      <div>
        <h1>Our Team Mates </h1>
        <Card style={{ width: 1000 }}>
          <Card.Img style={{ width: 'auto ' }} variant='top' src={Team} />
          <Card.Body>
            <Card.Title> :</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
