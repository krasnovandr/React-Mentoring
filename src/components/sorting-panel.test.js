import React from 'react'
import { render, cleanup, fireEvent, queryByText } from 'react-testing-library'
import { MemoryRouter } from "react-router-dom";
import SortingPanel from './sorting-panel';

const testMovies = {
    "data": [
        {
            "id": 181808,
            "title": "Star Wars: The Last Jedi",
            "tagline": "The Saga Continues",
            "vote_average": 7.1,
            "vote_count": 4732,
            "release_date": "2017-12-13",
            "poster_path": "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
            "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
            "budget": 200000000,
            "revenue": 1325937250,
            "genres": [
                "Fantasy",
                "Adventure",
                "Science Fiction"
            ],
            "runtime": 152
        },
        {
            "id": 140607,
            "title": "Star Wars: The Force Awakens",
            "tagline": "Every generation has a story.",
            "vote_average": 7.4,
            "vote_count": 9863,
            "release_date": "2015-12-15",
            "poster_path": "https://image.tmdb.org/t/p/w500/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
            "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
            "budget": 245000000,
            "revenue": 2068223624,
            "genres": [
                "Action",
                "Adventure",
                "Science Fiction",
                "Fantasy"
            ],
            "runtime": 136
        },
        {
            "id": 11,
            "title": "Star Wars",
            "tagline": "A long time ago in a galaxy far, far away...",
            "vote_average": 8.1,
            "vote_count": 8516,
            "release_date": "1977-05-25",
            "poster_path": "https://image.tmdb.org/t/p/w500/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg",
            "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
            "budget": 11000000,
            "revenue": 775398007,
            "genres": [
                "Adventure",
                "Action",
                "Science Fiction"
            ],
            "runtime": 121
        },
    ]
}

afterEach(cleanup)
describe('SortingPanel Component', () => {
    it('when component renders initially with  empty set  of movies it not renders labels', () => {
        const onOrderByChanged = jest.fn();
        const onOrderChanged = jest.fn();
        const { queryByText } = render(
            <MemoryRouter>
                <SortingPanel
                    moviesList={{}}
                    onOrderByChanged={onOrderByChanged}
                    onOrderChanged={onOrderChanged}
                />
            </MemoryRouter>)

        const moviesFoundLabel = queryByText('Movies Found');
        const averageRatingLabel = queryByText('Average Rating');

        expect(moviesFoundLabel).toBeNull();
        expect(averageRatingLabel).toBeNull();
    })

    it('when component renders initially with set of movies it renders movies count and average rating with initial dropdown values', () => {
        const onOrderByChanged = jest.fn();
        const onOrderChanged = jest.fn();
        const { getByText } = render(
            <MemoryRouter>
                <SortingPanel
                    moviesList={testMovies}
                    onOrderByChanged={onOrderByChanged}
                    onOrderChanged={onOrderChanged}
                />
            </MemoryRouter>)

        const moviesFoundLabel = getByText('Movies Found 3');
        const averageRatingLabel = getByText('Average Rating 7.53');

        expect(moviesFoundLabel).toBeDefined();
        expect(averageRatingLabel).toBeDefined();

    })
    it('when dropdown for orderby changed correpsonding function with params is triggered ', () => {
        const onOrderByChanged = jest.fn();
        const onOrderChanged = jest.fn();
        const { getByTestId } = render(
            <MemoryRouter>
                <SortingPanel
                    moviesList={testMovies}
                    onOrderByChanged={onOrderByChanged}
                    onOrderChanged={onOrderChanged}
                />
            </MemoryRouter>)

        const orderByDropDown = getByTestId("orderby-dropdown").querySelector('select')
        fireEvent.change(orderByDropDown, { target: { value: "vote_average" } })

        expect(onOrderByChanged).toHaveBeenCalledTimes(1)
        expect(onOrderByChanged).toHaveBeenCalledWith('vote_average');

        fireEvent.change(orderByDropDown, { target: { value: "title" } })

        expect(onOrderByChanged).toHaveBeenCalledTimes(2)
        expect(onOrderByChanged).toHaveBeenCalledWith('title');
    })
    it('when dropdown for order changed correpsonding function with params is triggered ', () => {
        const onOrderByChanged = jest.fn();
        const onOrderChanged = jest.fn();
        const { getByTestId } = render(
            <MemoryRouter>
                <SortingPanel
                    moviesList={testMovies}
                    onOrderByChanged={onOrderByChanged}
                    onOrderChanged={onOrderChanged}
                />
            </MemoryRouter>)
        const orderDropDown = getByTestId("order-dropdown").querySelector('select')
        fireEvent.change(orderDropDown, { target: { value: "asc" } })

        expect(onOrderChanged).toHaveBeenCalledTimes(1)
        expect(onOrderChanged).toHaveBeenCalledWith('asc');

        fireEvent.change(orderDropDown, { target: { value: "desc" } })

        expect(onOrderChanged).toHaveBeenCalledTimes(2)
        expect(onOrderChanged).toHaveBeenCalledWith('desc');
    })
})