import React, { Component } from "react";
import HomeServicesContent from "../components/HomeServiceContent";
import HomeServicesForm from "../components/HomeServiceForm";
class HomeServices extends Component {
  render() {
    return (
      <>
        <HomeServicesContent />
        <HomeServicesForm />
      </>
    );
  }
}
export default HomeServices;
