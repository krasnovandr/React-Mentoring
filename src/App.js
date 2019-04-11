import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Movies from "./pages/movies";
import { MovieDescription } from "./pages/movie-description";
import Header from "./shared-components/header";
import {
  Route
} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function App() {
  return (

    <div className="App">

      <Header></Header>
      <Route path="/" exact component={Movies} />
      <Route path="/search" exact component={Movies} />
      <Route path="/movies/:id" component={MovieDescription} />
    </div>
  );
}

export default withRouter(hot(module)(App));
