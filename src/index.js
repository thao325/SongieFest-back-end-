import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./bootstrap.min.css";
import store, { initialState } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} serverState={initialState}>
    <App />
  </Provider>
);
