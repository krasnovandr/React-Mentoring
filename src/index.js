import React from "react";
import { hydrate } from 'react-dom';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from "./store";

const store = configureStore(window.PRELOADED_STATE);

const root = (
  <App Router={BrowserRouter}
    store={store}
  />
);

hydrate(root, document.getElementById('root'));