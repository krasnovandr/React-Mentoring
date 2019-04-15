import { filter } from "./filter-reducer";
import { searchByChanged, queryChanged } from "../actions";

// import reducer from '../../structuring-reducers/todos'
// import * as types from '../../constants/ActionTypes'

describe('filter reducer', () => {
    it('should return the initial state', () => {
        expect(filter(undefined, {})).toEqual(
            {
                query: '',
                searchBy: "title",
            }
        )

    })
    it('should handle SEARCH_BY_CHANGED', () => {
        expect(filter({
            query: '',
            searchBy: "title",
        }, searchByChanged('genres'))).toEqual(
            {
                query: '',
                searchBy: "genres",
            }
        )
        expect(filter({
            query: 'asdasda',
            searchBy: "title",
        }, searchByChanged('genres'))).toEqual(
            {
                query: 'asdasda',
                searchBy: "genres",
            }
        )
    })
    it('should handle QUERY_CHANGED', () => {
        expect(filter({
            query: '123123',
            searchBy: "title",
        }, queryChanged('Star Wars'))).toEqual(
            {
                query: 'Star Wars',
                searchBy: "title",
            }
        )
    })
})