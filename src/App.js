import React from "react";
import "./App.css";
import { PureComponent } from "./components/PureComponent";
import { CreateElementComponent } from "./components/CreateElementComponent";
import { DefaultComponent } from "./components/DefaultComponent";
import { FunctionalComponent } from "./components/FunctionalComponent";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <DefaultComponent name="Andrei" />
        <CreateElementComponent />
        <FunctionalComponent name="Andrei" />
        <PureComponent name="Andrei" />
      </div>
    );
  }
}

export default App;
