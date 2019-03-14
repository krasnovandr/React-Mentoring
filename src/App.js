import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { Films } from "./pages/films";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Films />
      </div>
    );
  }
}

export default hot(module)(App);
