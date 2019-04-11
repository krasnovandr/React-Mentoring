import { CHANGE_FILTER, GET_MOVIES, ORDER_CHANGED, ORDER_BY_CHANGED, QUERY_CHANGED, SEARCH_BY_CHANGED, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILURE } from "../actions";


const initialState = {
    orderBy: 'release_date',
    order: 'asc',
    searchCriteria: { query: "", searchBy: "title" },
    moviesList: [],
    errorMoviesLoading: false
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
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
            //two possible syntaces
            // return Object.assign({}, state, {
            //     searchCriteria: { ...state.searchCriteria, query: action.query }
            // })

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



