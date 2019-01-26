import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { Card, Button } from 'react-native-elements';

class Deck extends Component {
  renderCards() {
    return this.props.data.map(item => {
      return (
        this.props.renderCard(item)
      );
    });
  }

  render() {
    return (
      <Card>
        {this.renderCards()}
      </Card>
    );
  }
}

export default Deck;
