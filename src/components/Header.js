import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#303481", opacity: "85%" }}>
          <Container>
            <Navbar.Brand href="/" style={{ color: "#F5F5F5" }}>
              Home
            </Navbar.Brand>

            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="/HomeServices"
               
              >
                Home Services
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/RoadServices"
            
              >
                Road Services
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand href="/Requests" style={{ color: "#F5F5F5" }}>
              Requests
            </Navbar.Brand>
            <Navbar.Brand href="/Feedback" style={{ color: "#F5F5F5" }}>
              Feedback
            </Navbar.Brand>
            <Navbar.Brand href="/AboutUs" style={{ color: "#F5F5F5" }}>
              About Us
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}
