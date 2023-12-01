import React, { Suspense }  from "react";
// import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import i18n from "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback="loading">
      <App />
  </Suspense>
);
