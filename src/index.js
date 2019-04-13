import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import {
    HashRouter
} from 'react-router-dom';
import { ErrorBoundary } from "./shared-components/error-boundary.jsx";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store'

ReactDOM.render(
    <ErrorBoundary>
        <HashRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </HashRouter>
    </ErrorBoundary>, document.getElementById("root"));
