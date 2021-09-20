import React, { Component } from "react";
import RoadServiceContent from "../components/RoadServiceContent";
import RoadServiceForm from "../components/RoadServiceForm";

// import axios from "axios";
class RoadServices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceData: [],
    };
  }
  HandleCreateService = (e) => {
    e.preventDefault();
    const helpBody = {
      Pesron_Name: e.target.personName.value,
      Pesron_Addres: e.target.personAddress.value,
      Pesron_Phone: e.target.personPhone.value,
      Person_Description : e.target.Description.value,
    };
    console.log("helpbody", helpBody);
    // axios
    //   .post(`${process.env.REACT_APP_SERVER}/services`, helpBody)
    //   .then((createdService) => {
    //     this.state.serviceData.push(createdService.data);
    //     this.setState({ serviceData: this.state.serviceData });
    //   });
  };
  render() {
    return (
      <div>
        <RoadServiceContent />
        <RoadServiceForm  HandleCreateService = {this.HandleCreateService} />
      </div>
    );
  }
}
export default RoadServices;
