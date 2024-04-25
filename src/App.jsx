import "./App.css";
import { MyBrowser } from "./components/my-browser";
import { data } from "./data";

const defaultExpandedFolders = ["/SDK/Bootstrapper/Packages", "/VC/bin"];

function App() {
  return <MyBrowser data={data} expandedFolders={defaultExpandedFolders} />;
}

export default App;
