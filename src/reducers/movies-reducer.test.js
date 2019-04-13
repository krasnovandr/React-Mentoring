import { movies } from './movies-reducer'
import { loadMovieDetailsSuccess, loadMovieDetailsFailure, loadMoviesFailure, loadMoviesSuccess } from '../actions';


const stubbedFilmaData = {
    data: [
        {
            id: 244,
            title: 'King Kong',
            tagline: 'A Monster of Creation\'s Dawn Breaks Loose in Our World Today!',
            vote_average: 7.7,
            vote_count: 448,
            release_date: '1933-04-07',
            poster_path: 'https://image.tmdb.org/t/p/w500/vXInYahVp31uL8wZORckaoHq565.jpg',
            overview: 'An adventure film about a film crew in search of a monster on a remote island. The crew finds King Kong and decides to take him back to New York as a money making spectacle. The film is a masterpiece of Stop-Motion in filmmaking history and inspired a line of King Kong films.',
            budget: 672000,
            revenue: 10000000,
            genres: [
                'Action',
                'Adventure',
                'Drama',
                'Horror'
            ],
            runtime: 100
        },
        {
            id: 260,
            title: 'The 39 Steps',
            tagline: 'Handcuffed to the girl who double-crossed him',
            vote_average: 7.5,
            vote_count: 274,
            release_date: '1935-06-01',
            poster_path: 'https://image.tmdb.org/t/p/w500/9v283GWj9a0AC8wwC4zriNqY1lZ.jpg',
            overview: 'Canadian Richard Hannay, residing in London, meets secret agent Annabella Smith immediately following a shots fired incident. She asks to go home with him. Back at Hannay\'s flat the mysterious woman confides that she fears for her life and is on a critical mission relating to protecting state air ministry secrets. Later that night assassins murder her. Believed by the police to be her killer, Hannay is forced to go on the run and flees to Scotland in a desperate attempt to see Annabella\'s mission through before it\'s too late. Along the way he chances upon beautiful Pamela, who unwillingly becomes his accomplice in the mission.',
            budget: 0,
            revenue: 0,
            genres: [
                'Action',
                'Thriller',
                'Mystery'
            ],
            runtime: 86
        }]
}
const stubbedMovieDetailsPayload = {
    currentMovie: {
        id: 244,
        title: 'King Kong',
        tagline: 'A Monster of Creation\'s Dawn Breaks Loose in Our World Today!',
        vote_average: 7.7,
        vote_count: 448,
        release_date: '1933-04-07',
        poster_path: 'https://image.tmdb.org/t/p/w500/vXInYahVp31uL8wZORckaoHq565.jpg',
        overview: 'An adventure film about a film crew in search of a monster on a remote island. The crew finds King Kong and decides to take him back to New York as a money making spectacle. The film is a masterpiece of Stop-Motion in filmmaking history and inspired a line of King Kong films.',
        budget: 672000,
        revenue: 10000000,
        genres: [
            'Action',
            'Adventure',
            'Drama',
            'Horror'
        ],
        runtime: 100
    },
    similarGenreFilms: {
        stubbedFilmaData
    }
}

describe('movie reducer', () => {
    it('should return the initial state', () => {
        expect(movies(undefined, {})).toEqual(
            {
                moviesList: [],
                errorMoviesLoading: false,
                errorMovieDetailsLoading: false,
                movieDetails: {
                    currentMovie: {},
                    similarGenreFilms: []
                }
            }
        )

    })
    it('should handle LOAD_MOVIEDETAILS_SUCCESS', () => {
        expect(movies({
            moviesList: [],
            errorMoviesLoading: false,
            errorMovieDetailsLoading: true,
            movieDetails: {
                currentMovie: {},
                similarGenreFilms: []
            }
        }, loadMovieDetailsSuccess(stubbedMovieDetailsPayload))).toEqual(
            {
                moviesList: [],
                errorMoviesLoading: false,
                errorMovieDetailsLoading: false,
                movieDetails: {
                    currentMovie: stubbedMovieDetailsPayload.currentMovie,
                    similarGenreFilms: stubbedMovieDetailsPayload.similarGenreFilms
                }
            }
        )
    })
    it('should handle LOAD_MOVIEDETAILS_FAILURE', () => {
        expect(movies({
            moviesList: [],
            errorMoviesLoading: false,
            errorMovieDetailsLoading: false,
            movieDetails: {
                currentMovie: {},
                similarGenreFilms: []
            }
        }, loadMovieDetailsFailure())).toEqual(
            {
                moviesList: [],
                errorMoviesLoading: false,
                errorMovieDetailsLoading: true,
                movieDetails: {
                    currentMovie: {},
                    similarGenreFilms: []
                }
            }
        )
    })
    it('should handle LOAD_MOVIES_SUCCESS', () => {
        expect(movies({
            moviesList: [],
            errorMoviesLoading: true,
            errorMovieDetailsLoading: false,
            movieDetails: {
                currentMovie: {},
                similarGenreFilms: []
            }
        }, loadMoviesSuccess(stubbedFilmaData))).toEqual(
            {
                moviesList: stubbedFilmaData,
                errorMoviesLoading: false,
                errorMovieDetailsLoading: false,
                movieDetails: {
                    currentMovie: {},
                    similarGenreFilms: []
                }
            }
        )
    })
    it('should handle LOAD_MOVIES_FAILURE', () => {
        expect(movies({
            moviesList: [],
            errorMoviesLoading: false,
            errorMovieDetailsLoading: false,
            movieDetails: {
                currentMovie: {},
                similarGenreFilms: []
            }
        }, loadMoviesFailure())).toEqual(
            {
                moviesList: [],
                errorMoviesLoading: true,
                errorMovieDetailsLoading: false,
                movieDetails: {
                    currentMovie: {},
                    similarGenreFilms: []
                }
            }
        )
    })
})