import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import MovieDetails from './movie-details'
import { Route, Link, MemoryRouter } from "react-router-dom";
import SearchToolbox from './search-toolbox';

afterEach(cleanup)
describe('SearchToolbox Component', () => {
    it('when search clicked with default params search by title and blank query', () => {
        const onSearchTriggered = jest.fn();

        const { container, getByTestId, debug } = render(
            <MemoryRouter>
                <SearchToolbox
                    onSearchTriggered={onSearchTriggered} />
            </MemoryRouter>)

        const searchButton = getByTestId('search-button');
        fireEvent.click(searchButton);
        expect(onSearchTriggered).toHaveBeenCalledTimes(1)
        expect(onSearchTriggered).toHaveBeenCalledWith({ query: "", searchBy: "title" });
    })

    it('when search clicked with update query search func should be triggered with appropriate value', () => {
        const onSearchTriggered = jest.fn();

        const { container, getByTestId, debug } = render(
            <MemoryRouter>
                <SearchToolbox
                    onSearchTriggered={onSearchTriggered} />
            </MemoryRouter>)

        const searchButton = getByTestId('search-button');
        const searchInput = getByTestId('search-input').querySelector('input');

        fireEvent.change(searchInput, { target: { value: "Star Wars" } })
        fireEvent.click(searchButton);
        expect(onSearchTriggered).toHaveBeenCalledTimes(1)
        expect(onSearchTriggered).toHaveBeenCalledWith({ query: "Star Wars", searchBy: "title" });
    })
    it('when radio button is changed news search criteria appears', () => {
        const onSearchTriggered = jest.fn();

        const { container, getByTestId, debug } = render(
            <MemoryRouter>
                <SearchToolbox
                    onSearchTriggered={onSearchTriggered} />
            </MemoryRouter>)


        const searchInput = container.querySelector('input');
        fireEvent.change(searchInput, { target: { value: "Star Wars" } })
        const genreRadioButton = getByTestId('genre-radio').querySelector('input');
        fireEvent.click(genreRadioButton, { target: { value: "genres" } })

        const searchButton = getByTestId('search-button');
        fireEvent.click(searchButton);
        expect(onSearchTriggered).toHaveBeenCalledTimes(1)
        expect(onSearchTriggered).toHaveBeenCalledWith({ query: "Star Wars", searchBy: "genres" });
    })
})