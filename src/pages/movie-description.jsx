import React from "react";
import MoviesList from "../components/movies-list";
import MovieDetails from "../components/movie-details";
import { MovieService } from "../movie-service";


export class MovieDescription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovie: {},
            similarGenreFilms: []
        };
        this.movieService = new MovieService();
    }

    componentDidMount() {
        this.movieService.getMovie(this.props.match.params.id)
            .then(movie => {
                this.setState({ currentMovie: movie })
                this.movieService.searchMovie('genres', movie.genres[0])
                    .then(similarMovies => {
                        return this.setState({ similarGenreFilms: similarMovies })
                    });
            });
    }

    render() {
        return (
            <div>
                <MovieDetails movie={this.state.currentMovie}></MovieDetails>
                <MoviesList items={this.state.similarGenreFilms} />
            </div>
        );
    }
}
