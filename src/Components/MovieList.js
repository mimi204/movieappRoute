import React from 'react'
import MovieCard from './MovieCard'



const MovieList = ({movies}) => {
    return (
       
             <div className="flex-container">
            {movies.map((movie) => (
                 <MovieCard film={movie}/>
           ))}
        </div>
    )
}

export default MovieList
