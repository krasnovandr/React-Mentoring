
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  loadMoviesRequest,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_FAILURE,
  LOAD_MOVIEDETAILS_FAILURE,
  LOAD_MOVIEDETAILS_SUCCESS,
  loadMovieDetails
} from './actions';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockedinitialState = {
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
}

describe('async actions', () => {
  beforeEach(() => {
    fetch.resetMocks();
  })
  it('creates LOAD_MOVIES_SUCCESS when fetching movies has been done', () => {
    let responseData = { data: '12345' }
    const response = JSON.stringify(responseData);

    fetch.mockResponseOnce(response)
    const expectedActions = [{ type: LOAD_MOVIES_SUCCESS, payload: responseData }]
    const store = mockStore(mockedinitialState)


    return store.dispatch(loadMoviesRequest()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
  it('creates LOAD_MOVIES_FAILURE when fetching movies has not been done', () => {

    fetch.mockReject(new Error('fake error message'))
    const expectedActions = [{ type: LOAD_MOVIES_FAILURE, error: true }]

    const store = mockStore(mockedinitialState)

    return store.dispatch(loadMoviesRequest()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
  it('creates LOAD_MOVIEDETAILS_SUCCESS when fetching movie  been done', () => {

    let responseData = {
      "id": 76122,
      "genres": ["Adventure"],
    }

    let responseSecondData = {
      "id": 76123,
      "genres": ["Drama"],
    }
    fetch
      .once(JSON.stringify(responseData))
      .once(JSON.stringify(responseSecondData))

    const expectedActions = [{
      type: LOAD_MOVIEDETAILS_SUCCESS, payload: {
        currentMovie: responseData,
        similarGenreFilms: responseSecondData
      }
    }]

    const store = mockStore(mockedinitialState)

    return store.dispatch(loadMovieDetails(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
  it('creates LOAD_MOVIEDETAILS_FAILURE when fetching movie  has not been done', () => {

    fetch.mockReject(new Error('fake error message'))
    const expectedActions = [{ type: LOAD_MOVIEDETAILS_FAILURE, error: true }]

    const store = mockStore(mockedinitialState)

    return store.dispatch(loadMovieDetails(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})