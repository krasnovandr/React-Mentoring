import { MoviesResponse } from './models/MoviesResponse';
import Movie from './models/Movie';

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

export interface MovieDetailsSuccessPayload {
    currentMovie: Movie;
    similarGenreFilms: MoviesResponse
}
export interface MovieDetailsSuccessAction {
    payload: MovieDetailsSuccessPayload;
    type: typeof LOAD_MOVIEDETAILS_SUCCESS
}


export interface MovieDetailsFailureAction {
    error: boolean;
    type: typeof LOAD_MOVIEDETAILS_FAILURE
}

export interface MoviesSuccessAction {
    payload: MoviesResponse;
    type: typeof LOAD_MOVIES_SUCCESS
}

export interface MoviesFailureAction {
    error: boolean;
    type: typeof LOAD_MOVIES_FAILURE
}

export interface MoviesRequesAction {
    payload: string | string[];
    type: typeof LOAD_MOVIES_REQUEST
}

export interface MovieDetailsRequesAction {
    payload: number;
    type: typeof LOAD_MOVIEDETAILS_REQUEST
}

export interface OrderByChangedAction {
    payload: string;
    type: typeof ORDER_BY_CHANGED
}
export interface OrderChangedAction {
    payload: string;
    type: typeof ORDER_CHANGED
}

export interface SearchByChangedAction {
    payload: string;
    type: typeof SEARCH_BY_CHANGED
}


export type ActionTypes =
    SearchByChangedAction
    | OrderChangedAction
    | OrderByChangedAction
    | MovieDetailsFailureAction
    | MovieDetailsSuccessAction
    | MoviesSuccessAction
    | MoviesFailureAction
    | MovieDetailsRequesAction
    | MoviesRequesAction