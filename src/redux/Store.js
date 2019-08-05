import { createStore, combineReducers } from "redux";
import UserReducer from "./User";

export default () => {
  const store = createStore(
    combineReducers({
      users: UserReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
