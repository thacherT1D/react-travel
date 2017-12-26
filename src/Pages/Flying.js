import React, { Component } from 'react';
import { Slider } from 'react-md';

export default class Flying extends Component {
  render() {
    return (
      <div className="md-grid">
        <h2 className="md-cell md-cell--12 md-text-container">
          Flying
        </h2>
        <Slider id="page-3-slider" className="md-cell md-cell--12" />
      </div>
    );
  }
}
