import React from 'react'
import StarRating from './StarRating'
import {Link} from 'react-router-dom'


const MovieCard = ({film}) => {
    return (
        <div className="container" >
                         <img className="poster"  src={film.image} alt={film.name} />             
                         <h1>{film.name}</h1>
                         <h2>{film.date}</h2>
            <StarRating rate={film.rating} />

            <div className="film-disc">
                <h2>Description</h2>
                <p>{film.desc}</p>
                <h1><Link to={`/Description/${film.name}`}>More informations</Link></h1>

                 </div>
            
            

                        </div>

    )
}

export default MovieCard
