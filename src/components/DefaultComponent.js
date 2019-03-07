import React from "react";

export class DefaultComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} from the Default Component</h1>;
  }
}
