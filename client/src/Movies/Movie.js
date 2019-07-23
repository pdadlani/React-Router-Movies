import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard.js';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  // changed above line, useState({}) to useState() to make it work.*********
  // const [savedMovie, setSavedMovie] = useState(false);
  // console.log('props in Movie.js:', props);
  const id = props.match.params.id;

 
  useEffect(() => {
    // const id = props.match.params.id;
    // moved const id (line above) outside of useEffect, so it can be accessed as first input argument. otherwise, it is unavailable outside the scope of useEffect().
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  // const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <MovieCard key={movie.id} movie={movie} />
      <div onClick={() => props.addToSavedList(movie)} className="save-button">Save</div>
    </div>
  );
}

export default Movie;
