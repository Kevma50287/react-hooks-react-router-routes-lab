import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((obj) => {
    const actorsMovies = obj.movies.map((movie) => {
      return (
        <li key={movie} >{movie}</li>
      )
    })

    return (
      <div key={obj.name}>
        <h2>{obj.name}</h2>
        {actorsMovies}
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>);
}


export default Actors;
