import React from 'react';
import Movie from './Movie';
import {MoviesContent} from './MovieStyle'

const Movies = (props) => {
    const {movies=[]} = props;
    return (
        <>
            <MoviesContent>
                {
                   movies.length ? movies.map((movies)=>{
                       return(
                           <Movie key={movies.imdbID} {...movies}/>
                       )
                   }) : <h5 className="shake-horizontal">Nothing not found</h5>
                }
            </MoviesContent>
        </>
    )
}

export default Movies
