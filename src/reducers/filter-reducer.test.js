import { filter } from "./filter-reducer";
import { searchByChanged, queryChanged } from "../actions";


describe('filter reducer', () => {
    it('should return the initial state', () => {
        expect(filter(undefined, {})).toEqual(
            {
                searchBy: "title",
            }
        )

    })
    it('should handle SEARCH_BY_CHANGED', () => {
        expect(filter({
            searchBy: "title",
        }, searchByChanged('genres'))).toEqual(
            {
                searchBy: "genres",
            }
        )
        expect(filter({
            searchBy: "title",
        }, searchByChanged('genres'))).toEqual(
            {
                searchBy: "genres",
            }
        )
    })
})