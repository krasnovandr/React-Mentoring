import React from "react";
import { hot } from "react-hot-loader";
import styles from "./App.css";
import Movies from "./pages/movies";
import MovieDescription from "./pages/movie-description";
import Header from "./shared-components/header";
import {
  Route, Switch
} from 'react-router-dom';
import { NotFound } from "./pages/not-found";

import { ErrorBoundary } from "./shared-components/error-boundary.jsx";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store'
import Favicon from 'react-favicon';

const App = ({ Router, location, context, store }) =>
  (
    <ErrorBoundary>
      <Router location={location} context={context}>
        <Provider store={store}>
          {/* <PersistGate loading={null} persistor={persistor}>
            <Favicon url="/favicon.ico" /> */}
          <div className={styles.App}>
            <Header></Header>
            <Switch>
              <Route path="/" exact component={Movies} />
              <Route path="/search" component={Movies} />
              <Route path="/movies/:id" component={MovieDescription} />
              <Route component={NotFound} />
            </Switch>
          </div>
          {/* </PersistGate> */}
        </Provider>
      </Router>
    </ErrorBoundary>
  );


export default hot(module)(App);
