import React from 'react';
import Movie from './Movie';
import {MoviesContent} from './MovieStyle'

const Movies = (props) => {
    const {movies} = props;
    return (
        <>
            <MoviesContent>
                {
                    movies.map((moviesValue)=>{
                        return(
                            <Movie key={moviesValue.imdbID} {...moviesValue} />
                        )
                    })
                }
            </MoviesContent>
        </>
    )
}

export default Movies
