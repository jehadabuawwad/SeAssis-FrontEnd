import React, { Component } from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Requests extends Component {

  constructor(props) {
    super(props);

    this.state = {
      services: []
    };
  }

  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_SERVER}/services`).then((servicesRes) => {

      this.setState({ services: servicesRes.data });
      console.log(this.state.services);

    }).catch(error => alert(error.message));

  }
  handelService = (servicId) => {
    axios.delete(`${process.env.REACT_APP_SERVER}/services/${servicId}`).then(deleteResponse => {
      if (deleteResponse.data.deletedCount === 1) {
        const newServicArr = this.state.services.filter(element => element._id !== servicId);
        this.setState({ services: newServicArr });
      }
    }).catch(() => alert("something went wrong -check axios.delete function "));
  }

  render() {
    return (
      <div>
        <>
          <Row>
            {
              this.state.services.length > 0 &&

              this.state.services.map(data => {

                return (
                  <>
                    <Col md={3} >
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={data.map} />
                        <Card.Body>
                          <Card.Title>{data.Pesron_Name}</Card.Title>
                          <Card.Text>
                            {data.Person_Description}
                          </Card.Text>
                          <Button onClick={() => this.handelService(data._id)} variant="danger">Resolved Ticket</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                );
              })

            }
          </Row>
        </>
      </div>
    );
  }
}
export default Requests;
