import React, { Component } from 'react';

export default class Things extends Component {
  render() {
    return (
      <div className="md-grid">
        <div className="md-cell md-cell--12 md-text-container">
          <h2>Dog Things</h2>
          <p>Here is some text for the second page. It is quite beautiful.</p>
          <ul>
            <li href="https://doggoipsum.com/">Doggo Ipsum</li>
          </ul>
        </div>
      </div>
    );
  }
}
