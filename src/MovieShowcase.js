import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  //This is a class function (note the `= ()`). It can be used only within the class
  generateMovieCards = () => {
    return movieData.map(movie => {
      return <MovieCard newMovie={movie} />
      })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
