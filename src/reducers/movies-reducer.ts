import {
    LOAD_MOVIES_SUCCESS,
    LOAD_MOVIES_FAILURE,
    LOAD_MOVIEDETAILS_SUCCESS,
    LOAD_MOVIEDETAILS_FAILURE,
    ActionTypes
} from "../action-types";
import Movie from "../models/Movie";

interface MovieDetails {
    currentMovie: any;
    similarGenreFilms: Movie[];
}
export interface MoviesState {
    moviesList: Movie[];
    errorMoviesLoading: boolean;
    errorMovieDetailsLoading: boolean;
    movieDetails: MovieDetails
}


const moviesInitialState: MoviesState = {
    moviesList: [],
    errorMoviesLoading: false,
    errorMovieDetailsLoading: false,
    movieDetails: {
        currentMovie: { },
        similarGenreFilms: []
    }
}


export function movies(state = moviesInitialState, action: ActionTypes) {
    switch (action.type) {
        case LOAD_MOVIEDETAILS_SUCCESS:
            return {
                ...state,
                movieDetails: action.payload,
                errorMovieDetailsLoading: false
            };
        case LOAD_MOVIEDETAILS_FAILURE:
            return {
                ...state,
                errorMovieDetailsLoading: action.error
            };
        case LOAD_MOVIES_SUCCESS:
            return {
                ...state,
                moviesList: action.payload,
                errorMoviesLoading: false
            };
        case LOAD_MOVIES_FAILURE:
            return {
                ...state,
                errorMoviesLoading: action.error
            };
        default:
            return state;
    }
}
