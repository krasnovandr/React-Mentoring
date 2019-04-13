import { order } from "./order-reducer";
import { orderChanged, orderByChanged } from "../actions";

describe('order reducer', () => {
    it('should return the initial state', () => {
        expect(order(undefined, {})).toEqual(
            {
                orderBy: 'release_date',
                order: 'asc',
            }
        )

    })
    it('should handle ORDER_CHANGED', () => {
        expect(order({
            orderBy: 'release_date',
            order: 'desc',
        }, orderChanged('asc'))).toEqual(
            {
                orderBy: 'release_date',
                order: 'asc'
            }
        )
        expect(order({
            orderBy: '',
            order: '',
        }, orderChanged('desc'))).toEqual(
            {
                orderBy: '',
                order: 'desc',
            }
        )
    })
    it('should handle ORDER_BY_CHANGED', () => {
        expect(order({
            orderBy: 'release_date',
            order: 'desc',
        }, orderByChanged('vote_average'))).toEqual(
            {
                orderBy: 'vote_average',
                order: 'desc'
            }
        )
    })
})