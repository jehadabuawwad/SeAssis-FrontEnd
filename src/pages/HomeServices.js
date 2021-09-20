import React, { Component } from 'react';
import HomeServicesContent from '../components/HomeServiceContent';
import HomeServicesForm from '../components/HomeServiceForm';
import axios from 'axios';
class HomeServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      MapOfLocation: '',
    };
  }

  HandleLocation = async () => {
    await navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: [position.coords.latitude, position.coords.longitude],
      });

      const url1 = `https://maps.locationiq.com/v3/staticmap?key=pk.cbecb2703474c628d6f82047cd751d62&zoom=18&center=${this.state.location}&format=jpg`;
      axios.get(url1).then((mapResponse) => {
        this.setState({ MapOfLocation: mapResponse.request.responseURL });
      });
    });
  };

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
