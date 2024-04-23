import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MyBrowser } from "./components/my-browser";

const data = [
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
    children: [{ name: "file3.txt", mimeType: "text/plain" }],
  },
  {
    name: "Folder A",
    children: [
      {
        name: "Folder B",
        children: [
          {
            name: "Folder C",
            children: [{ name: "Hello_world.js", mimeType: "text/plain" }],
          },
          { name: " hello_Im_in_B.js", mimeType: "text/plain" },
        ],
      },
    ],
  },
];

const expandedFolders = ["/Folder 1", "/Folder A/Folder B/Folder C"];

function App() {
  return <MyBrowser data={data} expandedFolders={expandedFolders} />;
}

export default App;
