import { LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILURE, LOAD_MOVIEDETAILS_SUCCESS, LOAD_MOVIEDETAILS_FAILURE } from "../actions";

const moviesInitialState = {
    moviesList: [],
    errorMoviesLoading: false,
    errorMovieDetailsLoading: false,
    movieDetails: {
        currentMovie: {},
        similarGenreFilms: []
    }
}


export function movies(state = moviesInitialState, action) {
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
