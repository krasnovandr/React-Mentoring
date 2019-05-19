
import * as React from 'react';
import { ErrorMessage } from './error-message';

export class ErrorBoundary extends React.Component<{}> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorMessage></ErrorMessage>;
        }

        return this.props.children;
    }
}