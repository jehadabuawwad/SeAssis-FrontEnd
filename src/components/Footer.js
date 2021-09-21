import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar
          style={{
            textAlign: "center",
            marginTop: 100,
            backgroundColor: "#FFF200",
            opacity:'80%',
      
          }}
        >
          <Navbar.Brand>
            <p style={{ fontSize: "20px",  color:"#303481",fontWeight:'bold' }}>Code-Vibes-Developer&copy; 2021</p>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
