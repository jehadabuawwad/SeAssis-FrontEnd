import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>
            <p  style={{ fontSize:'14px' }}>Code-Vibes_Developer&copy; 2021</p>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
