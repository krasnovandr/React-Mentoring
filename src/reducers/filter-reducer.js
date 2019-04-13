import { QUERY_CHANGED, SEARCH_BY_CHANGED } from "../actions";

const filterInitialState = {
    query: "",
    searchBy: "title",
}

export function filter(state = filterInitialState, action) {
    switch (action.type) {
        case QUERY_CHANGED:
            return {
                ...state,
                query: action.payload
            };
        case SEARCH_BY_CHANGED:
            return {
                ...state,
                searchBy: action.payload
            };
        default:
            return state;
    }
}
