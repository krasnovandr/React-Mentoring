import React from "react";
import MoviesList from "../components/movies-list";
import MovieDetails from "../components/movie-details";
import { MovieService } from "../movie-service";
import { ErrorMessage } from "../shared-components/error-message";


export class MovieDescription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovie: {},
            similarGenreFilms: [],
            error: null
        };
        this.movieService = new MovieService();
    }

    componentDidMount() {
        this.movieService.getMovie(this.props.match.params.id)
            .then(movie => {
                this.setState({ currentMovie: movie })
                this.movieService.searchMovie('genres', movie.genres[0])
                    .then(similarMovies => this.setState({ similarGenreFilms: similarMovies })
                        .catch(error => this.setState({ error })))
            }).catch(error => this.setState({ error }));
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <div>
                <MovieDetails movie={this.state.currentMovie}></MovieDetails>
                <MoviesList items={this.state.similarGenreFilms} />
            </div>
        );
    }
}
