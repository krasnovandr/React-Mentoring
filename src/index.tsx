import * as React from "react";
import { hydrate } from 'react-dom';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from "./store";

declare global {
  interface Window { PRELOADED_STATE: any; }
}

window.PRELOADED_STATE = window.PRELOADED_STATE || {};

const store = configureStore(window.PRELOADED_STATE);

const Root = () => (
  <App Router={BrowserRouter}
    store={store}
  />
);

hydrate(<Root />, document.getElementById('root'));