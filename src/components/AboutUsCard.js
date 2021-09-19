import React, { Component } from "react";
import Card from "react-bootstrap/Card";
export default class AboutUsCard extends Component {
  render() {
    return (
      <div>
        <h1>Our Team Mates </h1>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="src/media/images/jihad.jpg" />
          <Card.Body>
            <Card.Title>Team Leader :</Card.Title>
            <Card.Text>Jehad Abu Awwad</Card.Text>
          </Card.Body>
        </Card>
        <CardGroup>
          <Card.Img variant="top" src="src/media/images/samah.jpg" />
          <Card.Body>
            <Card.Title>First Member :</Card.Title>
            <Card.Text>Samah Hamed</Card.Text>
          </Card.Body>
          <Card>
            <Card.Img variant="top" src="src/media/images/ibrahem.png" />
            <Card.Body>
              <Card.Title>Second Member :</Card.Title>
              <Card.Text>Ibrahim Bader</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="src/media/images/ehab.jpeg" />
            <Card.Body>
              <Card.Title>Second Member :</Card.Title>
              <Card.Text>Ehab Ahmad</Card.Text>
            </Card.Body>
          </Card>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>fourth Member :</Card.Title>
            <Card.Text>Ahmad AbuTaifor</Card.Text>
          </Card.Body>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Fifth Member :</Card.Title>
            <Card.Text>Gharam Alessa</Card.Text>
          </Card.Body>
        </CardGroup>
      </div>
    );
  }
}
