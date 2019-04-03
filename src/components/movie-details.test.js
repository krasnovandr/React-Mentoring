import React from 'react'
import { render, cleanup } from 'react-testing-library'
import MovieDetails from './movie-details'
import { Route, Link, MemoryRouter } from "react-router-dom";

afterEach(cleanup)
describe('Movie Details Component', () => {
    it('should render all fields related to the movie', () => {
        const testMovie =
        {
            "id": 447365,
            "title": "Guardians of the Galaxy Vol. 3",
            "tagline": "",
            "vote_average": 10,
            "vote_count": 9,
            "release_date": "2020-05-01",
            "poster_path": "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
            "overview": "The third film based on Marvel's Guardians of the Galaxy.",
            "budget": 0,
            "revenue": 0,
            "genres": [
                "Action",
                "Adventure",
                "Science Fiction"
            ],
            "runtime": 98
        }

        const { getByText } = render(
            <MemoryRouter>
                <MovieDetails movie={testMovie} />
            </MemoryRouter>)
        
        const title = getByText(testMovie.title);
        const runtimeMessage = getByText(`${testMovie.runtime} min`);
        const voteAverage = getByText(testMovie.vote_average.toString());
        const releaseDate = getByText('2020');

        const searchLink = getByText('Search');
        expect(title).toBeDefined();
        expect(runtimeMessage).toBeDefined();
        expect(voteAverage).toBeDefined();
        expect(searchLink).toBeDefined();
        expect(releaseDate).toBeDefined();

    })
})