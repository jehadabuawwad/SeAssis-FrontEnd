import React, { Component } from 'react';
import FeedbackSlider from '../components/FeedbackSlider';
import '../HomeGrid.css';
import FeedbackForm from '../components/FeedbackForm';
export default class Feedback extends Component {
  render() {
    return (
      <div>
        <FeedbackSlider />
        <FeedbackForm />
      </div>
    );
  }
}
