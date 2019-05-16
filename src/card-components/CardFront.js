import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    console.log(`CardFront render()`, this.props.movieFront)
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.movieFront})`}}>
      </div>
    )
  }
}
