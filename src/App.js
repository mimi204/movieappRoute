import React, { useState } from 'react';
import Search from './Components/Search';
import MovieList from './Components/MovieList';
import { moviesData } from "./data";
import './App.css';
import AddMovie from './Components/AddMovie';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Description from './Components/Description ';





function App() {
     const [movies, setMovies] = useState(moviesData);
  const [searchRating, setSearchRating] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  //adding movies to the list
  const handleAdd = (newMovie) => setMovies([...movies, newMovie]);
  // handle rating
  const handleRating = (newRate) => setSearchRating(newRate);
  // handle search
  const handleSearch = (e) => setSearchValue(e.target.value);
   

    return (
        <div className="container">
        <div className="gradient-text">MOVIE APP</div>
      
        
        <BrowserRouter>
       
       <Search
        searchRating={searchRating}
        searchValue={searchValue}
        handleRating={handleRating}
        handleSearch={handleSearch}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
               <MovieList
        movies={movies.filter(
          (movie) =>
            movie.name
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase().trim()) &&
            movie.rating >= searchRating
        )}
            />
              
            )}
          />


          <Route
            path="/Description/:name"
            render={(props)=> <Description movies={movies} {...props}/>}
          />

          </Switch>
           </BrowserRouter>

        


      
            
             <AddMovie handleAdd={handleAdd} />
    </div>
    )
}

export default App
