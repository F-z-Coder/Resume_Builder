import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/App";
import data from "./data";
console.log(data);
const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <App {...data} />
  </React.StrictMode>
);
