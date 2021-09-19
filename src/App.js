import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Feedback from "react-bootstrap/esm/Feedback";
import AboutUs from "./pages/AboutUs";
// import Requests from "./pages/Requests";
import HomeServices from "./pages/HomeServices";
import RoadServices from "./pages/RoadServices";
import { Row, Col, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Requests from "./pages/Requests";
class App extends React.Component {
  render() {
    return (
      <Container>
        <Router>
          <Row>
            <Col md={{ span: 0, offset: 0 }}>
              <Header />
            </Col>
          </Row>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/HomeServices">
              <HomeServices />
            </Route>

            <Route exact path="/RoadServices">
              <RoadServices />
            </Route>

            <Route exact path="/Feedback">
              <Feedback />
            </Route>

            <Route exact path="/AboutUs"></Route>
            <AboutUs />
            <Route exact path="/Requests">
              <Requests />
            </Route>
          </Switch>

          <Row>
            <Col md={{ span: 0, offset: 0 }}>
              <Footer />
            </Col>
          </Row>
        </Router>
      </Container>
    );
  }
}

export default App;
