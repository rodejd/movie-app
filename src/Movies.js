import React from 'react';
import propTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

function Movies({id, year , title, summary, poster, genres}){

    return(
            <Link to={{
                pathname: "/about",
                state:{
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}>
                <div className="moviess">
                <img src={poster} />

    {/*<img src="https://postfiles.pstatic.net/MjAxOTExMjhfMTA3/MDAxNTc0OTIwNzIxMTgw.UnBNHyZFAToN9crdSPpCBpt_-WQ2e6rJCBzhoXp-_Tgg.dMzYe1zkiND64fcn2RVL5o-RUTcc-Yp9--I5v877eHwg.PNG.dall011/image.png?type=w773" />*/}
            <h1>{title}</h1>
            <h1>{summary.slice(0,140)}...</h1>
            <h1>{year}</h1>
            <ul className="genres">
               {genres.map((gen,index) => <li key={index}>{index} : {gen}</li>)}
            </ul>

        </div>
            </Link>
            )}


Movies.propTypes = {
    id : propTypes.number.isRequired,
    year : propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary:propTypes.string.isRequired,
    poster : propTypes.string.isRequired
}

export default Movies;