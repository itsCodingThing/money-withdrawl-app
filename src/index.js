import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import "./styles/index.css";

import configureStore from "./redux/Store";
import AppRouter from "./route/AppRouter";

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
