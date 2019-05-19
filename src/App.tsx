import * as React from "react";
import 'isomorphic-fetch';
import "es6-promise/auto";
import '@babel/polyfill';
import { hot } from "react-hot-loader";
import * as styles from "./App.css";
import Movies from "./pages/movies";
import MovieDescription from "./pages/movie-description";
import Header from "./shared-components/header";
import {
  Route, Switch
} from 'react-router-dom';
import { NotFound } from "./pages/not-found";

import { ErrorBoundary } from "./shared-components/error-boundary";
import { Provider } from 'react-redux'

interface AppProps {
  Router: any;
  location?: any;
  context?: any;
  store: any;
}
// { Router, location, context, store }
const App: React.FC<AppProps> = (props) => {
  return (
    <ErrorBoundary>
      <props.Router location={props.location} context={props.context} >
        <Provider store={props.store}>
          <div className={styles.App}>
            <Header></Header>
            < Switch >
              <Route path="/" exact component={Movies} />
              <Route path="/search" component={Movies} />
              <Route path="/movies/:id" component={MovieDescription} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Provider>
      </props.Router>
    </ErrorBoundary>)
};


export default hot(module)(App);
