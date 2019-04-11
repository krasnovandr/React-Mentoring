export const CHANGE_FILTER = 'CHANGE_FILTER'
export const GET_MOVIES = 'GET_MOVIES'

export const ORDER_CHANGED = 'ORDER_CHANGED'
export const ORDER_BY_CHANGED = 'ORDER_BY_CHANGED'

export const SEARCH_BY_CHANGED = 'SEARCH_BY_CHANGED'
export const QUERY_CHANGED = 'QUERY_CHANGED'

// handleSearchChange = e => {
//     this.props.dispatch(changeFilter(newSearchResult));
//     // this.setState({ query: e.target.value });
//   };

//   handleSearchbyCriteria = e => {
//     // this.setState({ searchBy: e.target.value });
//   };
export function changeFilter(newSearchCriteria) {
    return { type: CHANGE_FILTER, searchCriteria: newSearchCriteria }
}

export function getMovies(payload) {
    return { type: GET_MOVIES, payload }
}

// orderBy: 'release_date',
// order: 'asc',

export function orderByChanged(newOrderBy) {
    return { type: ORDER_BY_CHANGED, orderBy: newOrderBy }
}

export function orderChanged(newOrder) {
    return { type: ORDER_CHANGED, order: newOrder }
}

export function queryChanged(newQuery) {
    return { type: QUERY_CHANGED, query: newQuery }
}

export function searchByChanged(newSearchBy) {
    return { type: SEARCH_BY_CHANGED, searchBy: newSearchBy }
}


