import React from 'react'
import { render, cleanup } from 'react-testing-library'
import renderer from 'react-test-renderer';
import { NotFound } from './not-found';
afterEach(cleanup)
describe('NotFound  Component', () => {
    it('should render error component', () => {
        const component = renderer.create(
            <NotFound />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    })
})