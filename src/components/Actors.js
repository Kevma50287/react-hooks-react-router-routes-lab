import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((obj) => {
    const actorsMovies = obj.movies.map((movie) => {
      return (
        <li>{movie}</li>
      )
    })

    return (
      <div>
        <h2>{obj.name}</h2>
        {actorsMovies}
      </div>
    )
  })

  return (
    <div>
      <h1>Actor's Page</h1>
      {actorsList}
    </div>);
}


export default Actors;
