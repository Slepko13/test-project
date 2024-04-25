import { Component } from "react";
import { Folder } from "./folder";
import { File } from "./file";

const routeBuilder = (name, parentRoute) => {
  return parentRoute ? `${parentRoute}/${name}` : `/${name}`;
};

const renderItems = (items, expandedFolders, parentRoute) => {
  return items.map((item) => {
    if (!item.mime) {
      const routeToFolder = routeBuilder(item.name, parentRoute);
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

const getPathsToExpand = (data, searchValue) => {
  if (searchValue.length < 1) return [];
  const paths = [];

  const searchFiles = (currentPath, currentItem) => {
    if (currentItem.children) {
      currentItem.children.forEach((child) => {
        if (child.children) {
          searchFiles(`${currentPath}/${currentItem.name}`, child);
        } else if (
          child.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          child.mime
        ) {
          paths.push(`${currentPath}/${currentItem.name}`);
        }
      });
    }
  };

  data.forEach((item) => {
    searchFiles("", item);
  });

  return paths;
};

export class MyBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      filteredData: this.props.data,
      pathsToExpand: this.props.expandedFolders,
    };
    this.timer = null;
  }

  filterData = (data, searchValue, parentRoute) => {
    if (searchValue.length < 1) return data;

    return data.reduce((acc, item) => {
      const routeToFolder = routeBuilder(item.name, parentRoute);
      if (item.children) {
        const filteredChildren = this.filterData(
          item.children,
          searchValue,
          routeToFolder
        );
        if (filteredChildren.length > 0) {
          acc.push({ ...item, children: filteredChildren });
        }
      } else {
        if (
          item.name &&
          item.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          item.mime
        ) {
          acc.push(item);
        }
      }
      return acc;
    }, []);
  };

  handleChange = (event) => {
    clearTimeout(this.timer);
    const value = event.target.value.trim();
    this.setState({ searchValue: value });
    this.timer = setTimeout(() => {
      this.setState({
        filteredData: this.filterData(this.props.data, this.state.searchValue),
        pathsToExpand: getPathsToExpand(
          this.props.data,
          this.state.searchValue
        ),
      });
    }, 400);
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
        <div>
          {renderItems(this.state.filteredData, this.state.pathsToExpand)}
        </div>
      </>
    );
  }
}
