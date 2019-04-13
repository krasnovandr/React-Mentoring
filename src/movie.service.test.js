import { render, cleanup } from 'react-testing-library'
import { MovieService } from './movie-service'

afterEach(cleanup)
describe('Movie Service Component', () => {
    it('should make call to search api with builded url', () => {
        const movieService = new MovieService();
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
      
        const result = movieService.searchMovie('title', 'Star Wars', 'title', 'asc');
        
        expect(fetch.mock.calls[0][0]).toEqual('http://react-cdp-api.herokuapp.com/movies?limit=18&offset=0&search=Star%20Wars&searchBy=title&sortBy=title&sortOrder=asc')
    })

    it('should make call with movies id', () => {
        const movieService = new MovieService();
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
      
        const result = movieService.getMovie('1');
        
        expect(fetch.mock.calls[1][0]).toEqual('http://react-cdp-api.herokuapp.com/movies/1')
    })
})