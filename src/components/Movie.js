import React from 'react';


const Movie = (props) => {
    const {Title,Year,imdbID,Type,Poster} = props;
    return (
        <>
            <div key={imdbID} className="card ">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={Poster} alt=" info films" />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4 s12 m6">{Title}</span>
                    <p>{Year}<span>&nbsp;{Type}</span></p>
                </div>
            </div>
        </>
    )
}

export default Movie
