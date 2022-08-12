import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsList = directors.map((obj)=>{
    const directorsMovies = obj.movies.map((movie)=>{
      return (
        <li key={movie} >{movie}</li>
      )
    })

    return (
      <div key={obj.name}>
        <h2>{obj.name}</h2>
        {directorsMovies}
      </div>
    )
  })

  return (
  <div>
    <h1>Directors Page</h1>
    {directorsList}
  </div>);
}

export default Directors;
