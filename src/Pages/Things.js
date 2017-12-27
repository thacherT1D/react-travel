import React, { Component } from 'react';

export default class Things extends Component {
  render() {
    return (
      <div className="md-grid">
        <h2 className="md-cell md-cell--12 md-text-container">
          Dog Things
        </h2>
        <p className="md-cell md-cell--12 md-text-container">
          Here is some text for the second page. It is quite
          beautiful.
        </p>
        <ul>
          <li><span href="https://doggoipsum.com/">Doggo Ipsum</span></li>
        </ul>
      </div>
    );
  }
}
