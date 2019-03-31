import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { Route, Link, MemoryRouter } from "react-router-dom";
import Header from "./header"
import renderer from 'react-test-renderer';
// afterEach(cleanup)
describe('Header  Component', () => {
    it('should render error component', () => {
        const component = renderer.create(
            <Header />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    })
})