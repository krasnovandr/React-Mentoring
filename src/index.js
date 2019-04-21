import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import {
    BrowserRouter as Router
} from 'react-router-dom';
import { ErrorBoundary } from "./shared-components/error-boundary.jsx";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store'
import Favicon from 'react-favicon';

ReactDOM.render(
    <ErrorBoundary>
        <Router>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Favicon url="/favicon.ico" />
                    <App />
                </PersistGate>
            </Provider>
        </Router>
    </ErrorBoundary>, document.getElementById("root"));
