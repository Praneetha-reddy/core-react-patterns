// index.js: Entry point for React app
// Imports React, root element, global styles, and App component
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Create root and render App inside React.StrictMode
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
