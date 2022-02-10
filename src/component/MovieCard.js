import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


function MovieCard({movie}) {
  return <div>
  <div className="card movie_card">
		  <img src={movie.Poster} className="card-img-top" alt="..."/>
		  <div className="card-body">
		   <h5 className="card-title">{movie.Title}</h5>
            <p className="Description">{movie.Description}</p>
		   		<span className="movie_Time">{movie.Time}</span>
           <br/>
           <span className="card-title">{movie.Genre}</span>
           <br/>
		   		<span className="movie_info float-right">{movie.Rate} / 5</span>
           
           <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.Rate}
         
        />
	
		  </div>
		</div>
    
  </div>;
}

export default MovieCard;
