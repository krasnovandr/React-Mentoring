import { SEARCH_BY_CHANGED, ActionTypes } from './../action-types';

interface FilterState {
    searchBy: string
}

const filterInitialState: FilterState = {
    searchBy: "title",
}

export function filter(state = filterInitialState, action: ActionTypes) {
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
