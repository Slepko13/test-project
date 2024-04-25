import "./App.css";
import { MyBrowser } from "./components/my-browser";
import { data } from "./data";

const defaultExpandedFolders = ["/Folder A/Folder B/Folder C"];

function App() {
  return <MyBrowser data={data} expandedFolders={defaultExpandedFolders} />;
}

export default App;
