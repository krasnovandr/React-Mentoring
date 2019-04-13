import { MovieService } from "./movie-service";

export const CHANGE_FILTER = 'CHANGE_FILTER'
export const GET_MOVIES = 'GET_MOVIES'

export const ORDER_CHANGED = 'ORDER_CHANGED'
export const ORDER_BY_CHANGED = 'ORDER_BY_CHANGED'

export const SEARCH_BY_CHANGED = 'SEARCH_BY_CHANGED'
export const QUERY_CHANGED = 'QUERY_CHANGED'


export const LOAD_MOVIES_REQUEST = 'LOAD_MOVIES_REQUEST'
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS'
export const LOAD_MOVIES_FAILURE = 'LOAD_MOVIES_FAILURE'

export const LOAD_MOVIEDETAILS_REQUEST = 'LOAD_MOVIEDETAILS_REQUEST'
export const LOAD_MOVIEDETAILS_SUCCESS = 'LOAD_MOVIEDETAILS_SUCCESS'
export const LOAD_MOVIEDETAILS_FAILURE = 'LOAD_MOVIEDETAILS_FAILURE'

export function loadMovieDetails(id) {
    return function (dispatch) {
        const movieService = new MovieService();
        return movieService.getMovie(id)
            .then(movie => {
                return movieService.searchMovie('genres', movie.genres[0])
                    .then(similarMovies =>
                        dispatch(loadMovieDetailsSuccess({
                            currentMovie: movie,
                            similarGenreFilms: similarMovies
                        }))
                    ).catch(error => dispatch(loadMovieDetailsFailure()))
            }).catch(error => dispatch(loadMovieDetailsFailure()));
    }
}

export function loadMovieDetailsSuccess(data) {
    return { type: LOAD_MOVIEDETAILS_SUCCESS, payload: data }
}
export function loadMovieDetailsFailure() {
    return { type: LOAD_MOVIEDETAILS_FAILURE, error: true }
}

export function loadMoviesSuccess(data) {
    return { type: LOAD_MOVIES_SUCCESS, payload: data }
}

export function loadMoviesFailure() {
    return { type: LOAD_MOVIES_FAILURE, error: true }
}




export function loadMoviesRequest() {
    return function (dispatch, getState) {
        const movieService = new MovieService();
        const state = getState();
        return movieService.searchMovie(state.filter.searchBy, state.filter.query, state.order.orderBy, state.order.order)
            .then(data => dispatch(loadMoviesSuccess(data)))
            .catch(error => dispatch(loadMoviesFailure()));
    }
}

export function orderByChanged(newOrderBy) {
    return { type: ORDER_BY_CHANGED, payload: newOrderBy }
}

export function orderChanged(newOrder) {
    return { type: ORDER_CHANGED, payload: newOrder }
}

export function queryChanged(newQuery) {
    return { type: QUERY_CHANGED, payload: newQuery }
}

export function searchByChanged(newSearchBy) {
    return { type: SEARCH_BY_CHANGED, payload: newSearchBy }
}


