import React from 'react';
import propTypes from "prop-types";
import "./Movie.css";

function Movies({id, year , title, summary, poster, genres}){
    return(
        <div class="moviess">
    <img src={poster} />
    <h1>{title}</h1>
            <h1>{summary.slice(0,140)}...</h1>
            <h1>{year}</h1>
            <ul className="genres">
               {genres.map((gen,index) => <li key={index}>{index} : {gen}</li>)}
            </ul>
        </div>
            )}


Movies.propTypes = {
    id : propTypes.number.isRequired,
    year : propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary:propTypes.string.isRequired,
    poster : propTypes.string.isRequired
}

export default Movies;