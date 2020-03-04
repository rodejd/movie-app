import React , {Component} from 'react';
import axios from "axios";
import Movies from './Movies';
import "./Movie.css";



class Movie extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            kor: true,
            movies: []
        }

    }
    getMo = () =>{
        const {data : {data : {movies}}} = axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");

        this.setState(
            {movies, isLoading: false}
        )
    }

    getMovies = async () => {
        const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        console.log(movies);


        this.setState(
            {movies, isLoading: false}
        )
    }



    componentDidMount() {

        this.getMovies();

        setTimeout( () => {
            this.setState( {kor : false});
        }, 2000);
    }

    render() {
        const {isLoading , movies } = this.state;

        return(
            <div>
               <section className="container">
                <p>{isLoading ? <div className="loader">
                        <span className="loader_test">Loading..</span>
                </div>:


                    movies.map(movie => {
                    return <Movies key = {movie.id} id = {movie.id} year = {movie.year} title = {movie.title} summary = {movie.summary} poster =
                        {movie.medium_cover_image} genres = {movie.genres}/>
                })}</p>

                   

            </section>
            </div>
        );
    }
}

export default Movie;