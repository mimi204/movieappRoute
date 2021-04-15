import React from 'react'
import StarRating from "./StarRating";


const Search = ({ searchRating, searchValue, handleSearch, handleRating }) => {

    return (
   
            <div className="box">
  <div className="container-1">
    <span className="icon"><i className="fa fa-search" /></span>
                    <input
                        type="search"
                        id="search"
                         value={searchValue}
                         onChange={handleSearch}
                         placeholder="Enter a movie to search"
                    />
                </div>

    <div className="container-0">
                   <StarRating className="rate" rate={searchRating} handleRating={handleRating} />

                </div>

            </div>

    )
}

export default Search
