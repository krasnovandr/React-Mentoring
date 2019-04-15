import rootReducer from "./root-reducer";



describe('root reducer', () => {
    it('should return the initial state', () => {
        expect(rootReducer(undefined, {})).toEqual(
            {
                "filter": {
                    "query": "",
                    "searchBy": "title",
                },
                "movies": {
                    "errorMovieDetailsLoading": false,
                    "errorMoviesLoading": false,
                    "movieDetails": {
                        "currentMovie": {},
                        "similarGenreFilms": [],
                    },
                    "moviesList": [],
                },
                "order": {
                    "order": "asc",
                    "orderBy": "release_date",
                },
            })
    })
})