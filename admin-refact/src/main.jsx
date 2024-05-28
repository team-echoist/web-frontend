import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MaterialUIControllerProvider } from "context";
import { BrowserRouter } from "react-router-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MaterialUIControllerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MaterialUIControllerProvider>
  </React.StrictMode>
);