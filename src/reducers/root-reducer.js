import { combineReducers } from 'redux'
import { filter } from './filter-reducer'
import { order } from './order-reducer'
import { movies } from './movies-reducer'

const rootReducer = combineReducers({
    filter,
    order,
    movies
})

export default rootReducer;

export const selectedFilter = state => state.filter
export const selectedOrder = state => state.order



