import React, { Component } from "react";

export class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.isExpanded(props),
    };
  }

  isExpanded(props) {
    return props.expandedFolders.some((path) =>
      path.includes(props.routeToFolder)
    );
  }

  toggleCollapse = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.expandedFolders !== this.props.expandedFolders ||
      prevProps.routeToFolder !== this.props.routeToFolder
    ) {
      this.setState({ expanded: this.isExpanded(this.props) });
    }
  }

  render() {
    const { name, children } = this.props;

    return (
      <div>
        <div onClick={this.toggleCollapse} style={{ cursor: "pointer" }}>
          {this.state.expanded ? "-" : "+"} {name}
        </div>
        {this.state.expanded && (
          <div style={{ marginLeft: "20px" }}>{children}</div>
        )}
      </div>
    );
  }
}
