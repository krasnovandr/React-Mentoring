import React from 'react';
import MoviesList from "../components/movies-list";
import MovieDetails from "../components/movie-details";
import { ErrorMessage } from "../shared-components/error-message";
import { loadMovieDetails } from '../actions';
import { connect } from "react-redux";

class MovieDescription extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(loadMovieDetails(this.props.match.params.id));
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.dispatch(loadMovieDetails(this.props.match.params.id));
        }
    }

    render() {
        if (error) {
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
        movieDetails: state.movieDetails,
        error: state.errorMovieDetailsLoading
    }
}
export default connect(mapStateToProps, null)(MovieDescription);