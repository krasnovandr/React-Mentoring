import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import {
    HashRouter
} from 'react-router-dom';
import { ErrorBoundary } from "./shared-components/error-boundary.jsx";

ReactDOM.render(
    <ErrorBoundary>
        <HashRouter>
            <App />
        </HashRouter>
    </ErrorBoundary>, document.getElementById("root"));
