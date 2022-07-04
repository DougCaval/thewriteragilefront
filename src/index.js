import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/index.js";
import AplicationRoutes from "./routes/index.js";

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
    <AplicationRoutes/>
  </React.StrictMode>,
  document.getElementById("root")
);
