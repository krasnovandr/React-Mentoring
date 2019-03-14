import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { Films } from "./pages/films";
import Header from "./shared-components/header.js";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Films />
      </div>
    );
  }
}

export default hot(module)(App);
