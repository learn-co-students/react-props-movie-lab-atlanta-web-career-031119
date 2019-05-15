import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    const movieDetails = movieData.map((movie)=>
      <MovieCard title={movie.title} 
         IMDBRating = {movie.IMDBRating}
         genres = {movie.genres}
         poster = {movie.poster} />
    )
    console.log (movieDetails)
    return movieDetails;
  }
  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
// import data in movies showcase and export to movie card.js 