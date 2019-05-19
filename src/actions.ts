import { MovieService } from "./movie-service";



import { call, put, all, takeLatest, select, take } from 'redux-saga/effects';
import { selectedFilter, selectedOrder } from "./reducers/root-reducer";

import { MoviesResponse } from "./models/MoviesResponse";
import {
    ActionTypes,
    MovieDetailsSuccessPayload,
    MovieDetailsSuccessAction,
    LOAD_MOVIEDETAILS_SUCCESS,
    LOAD_MOVIEDETAILS_FAILURE,
    LOAD_MOVIES_SUCCESS,
    LOAD_MOVIES_FAILURE,
    LOAD_MOVIES_REQUEST,
    LOAD_MOVIEDETAILS_REQUEST,
    ORDER_BY_CHANGED,
    ORDER_CHANGED,
    SEARCH_BY_CHANGED
} from "./action-types";


export function loadMovieDetailsSuccess(data: MovieDetailsSuccessPayload): MovieDetailsSuccessAction {
    return {
        type: LOAD_MOVIEDETAILS_SUCCESS,
        payload: data
    }
}

export function loadMovieDetailsFailure(): ActionTypes {
    return {
        type: LOAD_MOVIEDETAILS_FAILURE, error: true
    }
}

export function loadMoviesSuccess(data: MoviesResponse): ActionTypes {
    return { type: LOAD_MOVIES_SUCCESS, payload: data }
}


export function loadMoviesFailure(): ActionTypes {
    return { type: LOAD_MOVIES_FAILURE, error: true }
}

export function loadMoviesRequest(data: string): ActionTypes {
    return { type: LOAD_MOVIES_REQUEST, payload: data }
}

export function loadMovieDetailsRequest(data: number): ActionTypes {
    return { type: LOAD_MOVIEDETAILS_REQUEST, payload: data }
}


export function orderByChanged(newOrderBy: string): ActionTypes {
    return { type: ORDER_BY_CHANGED, payload: newOrderBy }
}


export function orderChanged(newOrder: string): ActionTypes {
    return { type: ORDER_CHANGED, payload: newOrder }
}



export function searchByChanged(newSearchBy: string): ActionTypes {
    return { type: SEARCH_BY_CHANGED, payload: newSearchBy }
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

export function* fetchMoviesAsync(action: any) {

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

export function* fetchMovieDetailsAsync(action: any) {
    const movieService = new MovieService();
    try {
        const movie = yield call(() => movieService.getMovie(action.payload))

        const similarMovies = yield call(() => movieService.searchMovie('genres', movie.genres[0], 'release_date', 'asc'));

        yield put(loadMovieDetailsSuccess({ currentMovie: movie, similarGenreFilms: similarMovies }));
    } catch (error) {
        yield put(loadMovieDetailsFailure());
    }
}


