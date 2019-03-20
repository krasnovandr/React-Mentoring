import React, { useState, useEffect } from 'react';
import useReactRouter from 'use-react-router';
import MoviesList from "../components/movies-list";
import MovieDetails from "../components/movie-details";
import { MovieService } from "../movie-service";
import { ErrorMessage } from "../shared-components/error-message";


export function MovieDescription(props) {
    const movieService = new MovieService();
    const [error, setError] = useState(null);
    const [similarGenreFilms, setsimilarGenreFilms] = useState([]);
    const [currentMovie, setCurrentMovie] = useState({});
    const { history, location, match } = useReactRouter();

    useEffect(() => {
        movieService.getMovie(props.match.params.id)
            .then(movie => {
                setCurrentMovie(movie)
                movieService.searchMovie('genres', movie.genres[0])
                    .then(similarMovies => {
                        setsimilarGenreFilms(similarMovies);

                    }).catch(error => setError(error))
            }).catch(error => setError(error));
    }, [match]);

    if (error) {
        return <ErrorMessage />
    }

    return (
        <div>
            <MovieDetails movie={currentMovie}></MovieDetails>
            <MoviesList items={similarGenreFilms} />
        </div>
    );
}
