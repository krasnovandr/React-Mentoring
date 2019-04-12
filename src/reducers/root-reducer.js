import { CHANGE_FILTER, GET_MOVIES, ORDER_CHANGED, ORDER_BY_CHANGED, QUERY_CHANGED, SEARCH_BY_CHANGED, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILURE, LOAD_MOVIEDETAILS_SUCCESS, LOAD_MOVIEDETAILS_FAILURE } from "../actions";


const initialState = {
    orderBy: 'release_date',
    order: 'asc',
    searchCriteria: { query: "", searchBy: "title" },
    moviesList: [],
    errorMoviesLoading: false,
    errorMovieDetailsLoading: false,
    movieDetails: {
        currentMovie: {},
        similarGenreFilms: []
    }
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_MOVIEDETAILS_SUCCESS:
            return {
                ...state,
                movieDetails: action.payload,
                errorMovieDetailsLoading: false
            }
        case LOAD_MOVIEDETAILS_FAILURE:
            return {
                ...state,
                errorMovieDetailsLoading: action.error
            }
        case LOAD_MOVIES_SUCCESS:
            return {
                ...state,
                moviesList: action.payload,
                errorMoviesLoading: false
            }
        case LOAD_MOVIES_FAILURE:
            return {
                ...state,
                errorMoviesLoading: action.error
            }
        case ORDER_CHANGED:
            return {
                ...state,
                order: action.payload
            }
        case ORDER_BY_CHANGED:
            return {
                ...state,
                orderBy: action.payload
            }
        case QUERY_CHANGED:
            return {
                ...state,
                searchCriteria: { ...state.searchCriteria, query: action.payload }
            }
        case SEARCH_BY_CHANGED:
            return {
                ...state,
                searchCriteria: { ...state.searchCriteria, searchBy: action.payload }
            }

        default:
            return state;
    }
};
export default rootReducer;



