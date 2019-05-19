import { ActionTypes, ORDER_CHANGED, ORDER_BY_CHANGED } from './../action-types';

interface OrderState {
    orderBy: string;
    order: string;
}

const orderInitialState: OrderState = {
    orderBy: 'release_date',
    order: 'asc',
}

export function order(state = orderInitialState, action: ActionTypes) {
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
