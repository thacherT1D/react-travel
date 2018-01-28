import React, { Component } from 'react';
import { Card, CardTitle, CardText, Media, MediaOverlay } from 'react-md';
import park1 from '../styles/img/parks/claudel-rheault-28605.jpg';
import park2 from '../styles/img/parks/daniil-silantev-100528.jpg';
import park3 from '../styles/img/parks/james-donovan-180295.jpg';
import park4 from '../styles/img/parks/jessica-furtney-223489.jpg';
import park5 from '../styles/img/parks/john-salzarulo-41135.jpg';
import park6 from '../styles/img/parks/madison-nickel-43821.jpg';
import park7 from '../styles/img/parks/maximilian-engel-2082.jpg';
import park8 from '../styles/img/parks/patrick-hendry-221863.jpg';
import park9 from '../styles/img/parks/phil-goodwin-96377.jpg';

export default class Parks extends Component {
  render() {
    return (
      <div className="md-grid md-text-container">
        <h2 className="md-cell md-cell--12">
          Parks
        </h2>
        <Card className="md-cell">
          <Media>
            <img src={park1} alt="" />
          </Media>
          <CardTitle title="Magnusen Park" />
          <CardText>
            <p>Blop clouds floofs much ruin diet, what a nice floof. Pupper the neighborhood pupper long woofer heckin angery woofer, puggorino lotsa pats.</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <Media>
            <img src={park2} alt="" />
          </Media>
          <CardTitle title="Greenwood Park" />
          <CardText>
            <p>Blop clouds floofs much ruin diet, what a nice floof. Pupper the neighborhood pupper long woofer heckin angery woofer, puggorino lotsa pats.</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <Media>
            <img src={park3} alt="" />
          </Media>
          <CardTitle title="Woodland Park" />
          <CardText>
            <p>Blop clouds floofs much ruin diet, what a nice floof. Pupper the neighborhood pupper long woofer heckin angery woofer, puggorino lotsa pats.</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <Media>
            <img src={park4} alt="" />
          </Media>
          <CardTitle title="Another Park" />
          <CardText>
            <p>Blop clouds floofs much ruin diet, what a nice floof. Pupper the neighborhood pupper long woofer heckin angery woofer, puggorino lotsa pats.</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <Media>
            <img src={park5} alt="" />
          </Media>
          <CardTitle title="Another nother park" />
          <CardText>
            <p>Blop clouds floofs much ruin diet, what a nice floof. Pupper the neighborhood pupper long woofer heckin angery woofer, puggorino lotsa pats.</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <Media>
            <img src={park6} alt="" />
          </Media>
          <CardTitle title="Woodland Park" />
          <CardText>
            <p>Blop clouds floofs much ruin diet, what a nice floof. Pupper the neighborhood pupper long woofer heckin angery woofer, puggorino lotsa pats.</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <Media>
            <img src={park7} alt="" />
          </Media>
          <CardTitle title="Another Park" />
          <CardText>
            <p>Blop clouds floofs much ruin diet, what a nice floof. Pupper the neighborhood pupper long woofer heckin angery woofer, puggorino lotsa pats.</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <Media>
            <img src={park8} alt="" />
          </Media>
          <CardTitle title="Another nother park" />
          <CardText>
            <p>Blop clouds floofs much ruin diet, what a nice floof. Pupper the neighborhood pupper long woofer heckin angery woofer, puggorino lotsa pats.</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <Media>
            <img src={park9} alt="" />
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
