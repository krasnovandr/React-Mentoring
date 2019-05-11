import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import MovieDetails from './movie-details'
import { Route, Link, MemoryRouter } from "react-router-dom";
import SearchToolbox from './search-toolbox';

afterEach(cleanup)
describe('SearchToolbox Component', () => {
    it('when search clicked with default params search by title and blank query', () => {
        const onSearchTriggered = jest.fn();
        const searchCriteria = { query: '', searchBy: '' }
        const { container, getByTestId, debug } = render(
            <MemoryRouter>
                <SearchToolbox
                    onSearchTriggered={onSearchTriggered}
                    searchCriteria={searchCriteria}
                />
            </MemoryRouter>)

        const searchInput = getByTestId('search-input').querySelector('input');

        fireEvent.change(searchInput, { target: { value: "Star Wars" } })

        const searchButton = getByTestId('search-button');
        fireEvent.click(searchButton);
        expect(onSearchTriggered).toHaveBeenCalledTimes(1);
        expect(onSearchTriggered).toHaveBeenCalledWith('Star Wars');
    })

    it('when radio button is changed news search criteria appears', () => {
        const onSearchByChanged = jest.fn();
        const searchCriteria = { query: '', searchBy: '' }
        const { container, getByTestId, debug } = render(
            <MemoryRouter>
                <SearchToolbox
                    searchCriteria={searchCriteria}
                    onSearchByChanged={onSearchByChanged}
                />
            </MemoryRouter>)


        const genreRadioButton = getByTestId('genre-radio').querySelector('input');
        fireEvent.click(genreRadioButton, { target: { value: "genres" } })

        expect(onSearchByChanged).toHaveBeenCalledTimes(1)
        expect(onSearchByChanged).toHaveBeenCalledWith('genres');
    })
    it('when new props are recieved controls are updated', () => {
        const { getByTestId, rerender } = render(
            <MemoryRouter>
                <SearchToolbox
                    searchCriteria={{ searchBy: 'genres' }}
                />
            </MemoryRouter>)

        expect(getByTestId('search-input').querySelector('input').value).toBe('')
    })
})