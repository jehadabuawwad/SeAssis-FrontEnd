import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Team from '../media/images/team.jpg';
import '../HomeGrid.css';
export default class AboutUsCard extends Component {
  render() {
    return (
      <div style={{ paddingLeft:100 }}> 
        <h1>Our Team Mates </h1>
        <Card style={{ width: 1000 }}>
          <Card.Img style={{ width: 'auto ' }} variant='top' src={Team} />
        </Card>
      </div>
    );
  }
}
