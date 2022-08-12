import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsList = directors.map((obj)=>{
    const directorsMovies = obj.movies.map((movie)=>{
      return (
        <li>{movie}</li>
      )
    })

    return (
      <div>
        <h2>{obj.name}</h2>
        {directorsMovies}
      </div>
    )
  })

  return (
  <div>
    <h1>Director's Page</h1>
    {directorsList}
  </div>);
}

export default Directors;
