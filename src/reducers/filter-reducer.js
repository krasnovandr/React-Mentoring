import { QUERY_CHANGED, SEARCH_BY_CHANGED } from "../actions";

const filterInitialState = {
    searchBy: "title",
}

export function filter(state = filterInitialState, action) {
    switch (action.type) {
        case SEARCH_BY_CHANGED:
            return {
                ...state,
                searchBy: action.payload
            };
        default:
            return state;
    }
}
