import React, { Component } from 'react';
import { Card, CardTitle, CardText, Media, MediaOverlay } from 'react-md';
import dog5 from '../styles/img/patrick-hendry-406636.jpg';
import dog6 from '../styles/img/wyatt-ryan-367017.jpg';
import dog7 from '../styles/img/yuki-dog-423453.jpg';

export default class Parks extends Component {
  render() {
    return (
      <div className="md-grid md-text-container">
        <h2 className="md-cell md-cell--12">
          Parks
        </h2>
        <Card className="md-cell">
          <Media>
            <img src={dog5} alt="" />
          </Media>
          <CardTitle title="Magnusen Park" />
          <CardText>
            <p>Blop clouds floofs much ruin diet, what a nice floof. Pupper the neighborhood pupper long woofer heckin angery woofer, puggorino lotsa pats.</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <Media>
            <img src={dog6} alt="" />
          </Media>
          <CardTitle title="Greenwood Park" />
          <CardText>
            <p>Blop clouds floofs much ruin diet, what a nice floof. Pupper the neighborhood pupper long woofer heckin angery woofer, puggorino lotsa pats.</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <Media>
            <img src={dog7} alt="" />
          </Media>
          <CardTitle title="Woodland Park" />
          <CardText>
            <p>Blop clouds floofs much ruin diet, what a nice floof. Pupper the neighborhood pupper long woofer heckin angery woofer, puggorino lotsa pats.</p>
          </CardText>
        </Card>
      </div>
    );
  }
}
