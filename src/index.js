import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import {
    HashRouter
} from 'react-router-dom';
import { ErrorBoundary } from "./shared-components/error-boundary.jsx";
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <ErrorBoundary>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </ErrorBoundary>, document.getElementById("root"));
