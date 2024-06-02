import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* wraped the app with browserrouter --> we can use any component in react-router-dom can used in app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
