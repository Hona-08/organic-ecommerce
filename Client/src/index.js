import React from "react";
import ReactDOM from "react-dom"; //importing object
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
