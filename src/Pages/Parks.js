import React, { Component } from 'react';
import { Card, CardTitle, CardText, Media, MediaOverlay } from 'react-md';
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
            <img src={dog7} alt="" />
          </Media>
          <CardTitle title="Magnusen Park" />
          <CardText>
            <p>Wowza</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <CardTitle title="Card 2" />
          <CardText>
            <p>Wowza</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <CardTitle title="Card 3" />
          <CardText>
            <p>Wowza</p>
          </CardText>
        </Card>
      </div>
    );
  }
}
