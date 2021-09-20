import React, { Component } from "react";
import HomeServicesContent from "../components/HomeServiceContent";
import HomeServicesForm from "../components/HomeServiceForm";
import axios from "axios";

class HomeServices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceData: [],
    };
  }
  HandleCreateHomeService = (e) => {
    e.preventDefault();
    const helpBody = {
      Pesron_Name: e.target.personName.value,
      Pesron_Addres: e.target.personAddress.value,
      Pesron_Phone: e.target.personPhone.value,
      Person_Description: e.target.Description.value,
    };
    console.log("helpbody", helpBody);
    axios.post(`${process.env.REACT_APP_SERVER}/services`, helpBody).then((createdService) => {
      this.state.serviceData.push(createdService.data);
      this.setState({ serviceData: this.state.serviceData });
    });
  };
  render() {

    return (
      <>
        <HomeServicesContent />
        <HomeServicesForm HandleCreateHomeService={this.HandleCreateHomeService} />
      </>
    );
  }
}
export default HomeServices;
