import React from 'react';
import MoviesList from "../components/movies-list";
import MovieDetails from "../components/movie-details";
import { ErrorMessage } from "../shared-components/error-message";
import { loadMovieDetailsRequest } from '../actions';
import { connect } from "react-redux";
import { getMovieDetails, getLoadedMovies } from '../reducers/root-reducer';

class MovieDescription extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(loadMovieDetailsRequest(this.props.match.params.id));
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.dispatch(loadMovieDetails(this.props.match.params.id));
        }
    }

    render() {
        if (this.props.error) {
            return <ErrorMessage />
        }

        return (
            <div>
                <MovieDetails movie={this.props.movieDetails.currentMovie}></MovieDetails>
                <MoviesList items={this.props.movieDetails.similarGenreFilms} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movieDetails: getMovieDetails(state),
        error: getLoadedMovies(state).errorMovieDetailsLoading
    }
}
export default connect(mapStateToProps, null)(MovieDescription);