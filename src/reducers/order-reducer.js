import { ORDER_CHANGED, ORDER_BY_CHANGED } from "../actions";

const orderInitialState = {
    orderBy: 'release_date',
    order: 'asc',
}

export function order(state = orderInitialState, action) {
    switch (action.type) {
        case ORDER_CHANGED:
            return {
                ...state,
                order: action.payload
            };
        case ORDER_BY_CHANGED:
            return {
                ...state,
                orderBy: action.payload
            };
        default:
            return state;
    }
}
