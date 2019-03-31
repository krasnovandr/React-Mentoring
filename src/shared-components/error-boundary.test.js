import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { Route, Link, MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import { ErrorBoundary } from './error-boundary';
// afterEach(cleanup)

function Buggy() {
    throw new Error('Bug in component');
    return (<div>test</div>);
}
describe('Error  Boundary Component', () => {
    it('should render error component', () => {
        const component = renderer.create(
            <ErrorBoundary >
                <Buggy />
            </ErrorBoundary>
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    })
})