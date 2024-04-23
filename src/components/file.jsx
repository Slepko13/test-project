import { Component } from "react";

export class File extends Component {
  render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}
