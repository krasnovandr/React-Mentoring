import { MovieService } from "./movie-service";

export const CHANGE_FILTER = 'CHANGE_FILTER'
export const GET_MOVIES = 'GET_MOVIES'

export const ORDER_CHANGED = 'ORDER_CHANGED'
export const ORDER_BY_CHANGED = 'ORDER_BY_CHANGED'

export const SEARCH_BY_CHANGED = 'SEARCH_BY_CHANGED'

export const LOAD_MOVIES_REQUEST = 'LOAD_MOVIES_REQUEST'
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS'
export const LOAD_MOVIES_FAILURE = 'LOAD_MOVIES_FAILURE'

export const LOAD_MOVIEDETAILS_REQUEST = 'LOAD_MOVIEDETAILS_REQUEST'
export const LOAD_MOVIEDETAILS_SUCCESS = 'LOAD_MOVIEDETAILS_SUCCESS'
export const LOAD_MOVIEDETAILS_FAILURE = 'LOAD_MOVIEDETAILS_FAILURE'

import { call, put, all, takeLatest, select, take } from 'redux-saga/effects';
import { selectedFilter, selectedOrder } from "./reducers/root-reducer";



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

export function loadMoviesRequest(data) {
    return { type: LOAD_MOVIES_REQUEST, payload: data }
}

export function loadMovieDetailsRequest(data) {
    return { type: LOAD_MOVIEDETAILS_REQUEST, payload: data }
}



export function* moviesSaga() {
    yield all([
        watchFetchMovies(),
        watchFetchMovieDetails()
    ]);
}

export function* watchFetchMovies() {
    yield takeLatest(LOAD_MOVIES_REQUEST, fetchMoviesAsync);
}

export function* watchFetchMovieDetails() {
    yield takeLatest(LOAD_MOVIEDETAILS_REQUEST, fetchMovieDetailsAsync);
}

export function* fetchMoviesAsync(action) {

    const movieService = new MovieService();
    const filter = yield select(selectedFilter);
    const order = yield select(selectedOrder);

    try {
        const movies = yield call(() => movieService.searchMovie(
            filter.searchBy,
            action.payload,
            order.orderBy,
            order.order))

        yield put(loadMoviesSuccess(movies));
    }
    catch (error) {
        yield put(loadMoviesFailure());
    }
}

export function* fetchMovieDetailsAsync(action) {
    const movieService = new MovieService();
    try {
        const movie = yield call(() => movieService.getMovie(action.payload))

        const similarMovies = yield call(() => movieService.searchMovie('genres', movie.genres[0]));

        yield put(loadMovieDetailsSuccess({ currentMovie: movie, similarGenreFilms: similarMovies }));
    } catch (error) {
        yield put(loadMovieDetailsFailure());
    }
}
export function orderByChanged(newOrderBy) {
    return { type: ORDER_BY_CHANGED, payload: newOrderBy }
}

export function orderChanged(newOrder) {
    return { type: ORDER_CHANGED, payload: newOrder }
}

export function searchByChanged(newSearchBy) {
    return { type: SEARCH_BY_CHANGED, payload: newSearchBy }
}


