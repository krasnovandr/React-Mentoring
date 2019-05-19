import * as React from 'react';
import MoviesList from "../components/movies-list";
import { ErrorMessage } from "../shared-components/error-message";
import { loadMovieDetailsRequest } from '../actions';
import { connect } from "react-redux";
import { getMovieDetails, getLoadedMovies, AppState } from '../reducers/root-reducer';
import { match, RouteComponentProps } from 'react-router';
import { Location } from 'history';
import { MovieDetailsType } from '../reducers/movies-reducer';
import MovieDetails from '../components/movie-details';


interface MatchParams {
    name: string
}


interface MovieDescriptionProps {
    dispatch(func: any): any;
    // location: Location;
    // order: string;
    // orderBy: string;
    // history: History;
    error: boolean;
    movieDetails: MovieDetailsType
    match: any
    // moviesList: MoviesResponse;
    // searchCriteria:SearchCriteria

}

class MovieDescription extends React.Component<MovieDescriptionProps> {
    constructor(props: MovieDescriptionProps) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(loadMovieDetailsRequest(this.props.match.params.id));
    }

    componentDidUpdate(prevProps: MovieDescriptionProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.dispatch(loadMovieDetailsRequest(this.props.match.params.id));
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

function mapStateToProps(state: AppState) {
    return {
        movieDetails: getMovieDetails(state),
        error: getLoadedMovies(state).errorMovieDetailsLoading
    }
}
export default connect(mapStateToProps, null)(MovieDescription);