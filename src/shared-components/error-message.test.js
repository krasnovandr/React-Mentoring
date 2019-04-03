import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { Route, Link, MemoryRouter } from "react-router-dom";
import Header from "./header"
import renderer from 'react-test-renderer';
import { ErrorMessage } from './error-message';
// afterEach(cleanup)
describe('Error  Component', () => {
    it('should render error component', () => {
        const component = renderer.create(
            <ErrorMessage />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    })
})