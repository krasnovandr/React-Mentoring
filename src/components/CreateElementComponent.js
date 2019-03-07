import React from 'react';

export class CreateElementComponent extends React.Component {
  render() {
    return React.createElement(
      "div",
      {},
      React.createElement("h1", {}, "First Test Component with createElement"),
      React.createElement("h1", {}, "Second Test Component with createElement")
    );
  }
}
