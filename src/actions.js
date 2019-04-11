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
        return movieService.searchMovie(state.searchCriteria.searchBy, state.searchCriteria.query, state.orderBy, state.order)
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


