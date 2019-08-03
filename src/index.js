import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.css";

import configureStore from "./redux/Store";
import AppRouter from "./route/AppRouter";

import * as serviceWorker from "./serviceWorker";

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

const MainApp = () => (
  <ReduxProvider store={store}>
    <AppRouter />
  </ReduxProvider>
);

ReactDOM.render(<MainApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
