import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { BrowserRouter, Route, Link } from "react-router-dom";
const MovieCard = ({movie}) => {
    return (
        <div>
           <div class="movie_card" id="bright">
  <div class="info_section">
    <div class="header">
      <img class="locandina" src={movie.main_img}/>
      <h1>{movie.title}</h1>
      
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
          /*onStarClick={onStarClick}*/
        />
        <br/>
        
      <h4>2017, David Ayer</h4>
      <span class="minutes">{movie.duration}</span>
      <p class="type">{movie.genre}</p>
    </div>
    <div class="movie_desc">
      <p class="text">
        {movie.description} 
        <Link to={`/description/${movie.id}`}><button>description</button></Link>
      </p>
    </div>
    
  </div>
  <div class="blur_back " style={{backgroundImage:'url(${movie.second_img})'}}></div>
 

 
</div>

        </div>
    )
}

export default MovieCard
