
import React from 'react';
import { ErrorMessage } from './error-message';

export class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorMessage></ErrorMessage>;
        }

        return this.props.children;
    }
}