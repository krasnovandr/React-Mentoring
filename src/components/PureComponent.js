import React from "react";

export class PureComponent extends React.PureComponent {
  render() {
    return <h1>Hello, {this.props.name} from the Pure Component</h1>;
  }
}