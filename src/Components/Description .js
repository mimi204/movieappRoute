import { Link } from "react-router-dom"
import StarRating from './StarRating'

function Description({ movies , match }) {
    let movie =movies.find((el)=>el.name === match.params.name)
    
    return (
        <div className="description">

     
            < div className="moviecard" >
                <div className="video" >
                <iframe width="600" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
                </div>
   

            < div className="movieinfo" >
             <h2 >Name: <div className="title">{movie.name}</div></h2>
            <h2 >Date: <div className="title">{movie.date}</div></h2>
            <h2 >Description:<div className="details">{movie.desc}</div></h2>

            <StarRating rate={movie.rating} />
            </div>
            </div>
             <button><Link to='/'>Return</Link></button>
        </div>
    )
}

export default Description 
