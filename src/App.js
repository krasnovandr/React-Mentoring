import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { Movies } from "./pages/movies";
import { MovieDescription } from "./pages/movie-description";
import Header from "./shared-components/header";
import {
  NavLink,
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function App({ match }) {
  // const match = this.props.match.path;
  return (
    <div className="App">
      <Header></Header>
      <Route path="/" exact component={Movies} />
      <Route path="/films/:id" component={MovieDescription} />
    </div>
  );
}

export default withRouter(hot(module)(App));
