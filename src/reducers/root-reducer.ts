import { combineReducers } from 'redux'
import { filter } from './filter-reducer'
import { order } from './order-reducer'
import { movies } from './movies-reducer'
import { createSelector } from 'reselect';

const rootReducer = combineReducers({
    filter,
    order,
    movies
})

export default rootReducer;

export const selectedFilter = (state: any) => state.filter
export const selectedOrder = (state: any) => state.order
export const selectedMovies = (state: any) => state.movies

export const getCurrentFilter = createSelector(
    [selectedFilter],
    filter => filter)

export const getCurrentOrder = createSelector(
    [selectedOrder],
    order => order.order)

export const getCurrentOrderBy = createSelector(
    [selectedOrder],
    order => order.orderBy)

export const getLoadedMovies = createSelector([selectedMovies], movies => movies)


export const getMovieDetails = createSelector([selectedMovies], movies => movies.movieDetails)






