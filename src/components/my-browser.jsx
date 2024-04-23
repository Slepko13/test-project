import { Component } from "react";
import { Folder } from "./folder";
import { File } from "./file";

const routeBuilder = (parentRoute, name) => {
  return parentRoute ? `${parentRoute}/${name}` : `/${name}`;
};

const renderItems = (items, expandedFolders, parentRoute) => {
  return items.map((item) => {
    if (!item.mimeType) {
      const routeToFolder = routeBuilder(parentRoute, item.name);
      return (
        <Folder
          key={item.name}
          name={item.name}
          expandedFolders={expandedFolders}
          routeToFolder={routeToFolder}
        >
          {renderItems(item.children, expandedFolders, routeToFolder)}
        </Folder>
      );
    } else {
      return <File key={item.name} name={item.name} />;
    }
  });
};

export class MyBrowser extends Component {
  render() {
    const { data, expandedFolders } = this.props;

    return <div>{renderItems(data, expandedFolders)}</div>;
  }
}
