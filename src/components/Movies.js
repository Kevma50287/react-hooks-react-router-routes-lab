import React from "react";
import { movies } from "../data";

function Movies() {

  const movieList = movies.map((obj)=>{
    const genres = obj.genres.map((genre)=>{
      return (
        <li>{genre}</li>
      )
    })

    return (
      <div>
        <h1>{obj.title}</h1>
        <h3>RunTime: {obj.time}</h3>
        <ul>
          {genres}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>);
}

export default Movies;
