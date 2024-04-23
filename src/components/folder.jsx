import React, { Component } from "react";

export class Folder extends Component {
  constructor(props) {
    super(props);
    const { expandedFolders, routeToFolder } = this.props;
    this.state = {
      collapsed: !expandedFolders.some((path) => path.includes(routeToFolder)),
    };
  }

  toggleCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const { name, children, routeToFolder } = this.props;
    const { collapsed } = this.state;
    console.log("route", routeToFolder, "name", name);

    return (
      <div>
        <div onClick={this.toggleCollapse}>
          {collapsed ? "+" : "-"} {name}
        </div>
        {!collapsed && <div style={{ marginLeft: "20px" }}>{children}</div>}
      </div>
    );
  }
}
