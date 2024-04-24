import "./App.css";
import { MyBrowser } from "./components/my-browser";

const defaultData = [
  {
    name: "Folder 1",
    children: [
      {
        name: "Subfolder 1",
        children: [{ name: "file2.txt", mimeType: "text/plain" }],
      },
      { name: "file1.txt", mimeType: "text/plain" },
    ],
  },
  {
    name: "Folder 2",
    children: [{ name: "book.txt", mimeType: "text/plain" }],
  },
  {
    name: "Folder A",
    children: [
      {
        name: "Folder B",
        children: [
          {
            name: "Folder C",
            children: [{ name: "Hello_world.js", mimeType: "text/javascript" }],
          },
          { name: " hello_Im_in_B.js", mimeType: "text/javascript" },
          { name: " hello_Im_in_B2.js", mimeType: "text/javascript" },
        ],
      },
    ],
  },
];

const defaultExpandedFolders = ["/Folder A/Folder B/Folder C"];

function App() {
  return (
    <MyBrowser data={defaultData} expandedFolders={defaultExpandedFolders} />
  );
}

export default App;
