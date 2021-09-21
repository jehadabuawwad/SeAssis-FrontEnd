import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
require('dotenv').config();
class Requests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/services`)
      .then((servicesRes) => {
        this.setState({ services: servicesRes.data });
        console.log(this.state.services);
      })
      .catch((error) => alert(error.message));
  };

  render() {
    return (
      <div>
        {this.state.services.length > 0 &&
          this.state.services.map((data) => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={data.map} />
                <Card.Body>
                  <Card.Title>{data.Pesron_Name}</Card.Title>
                  <Card.Text>{data.Person_Description}</Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    );
  }
}
export default Requests;
