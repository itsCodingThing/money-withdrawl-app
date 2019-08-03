import { createStore, combineReducers } from "redux";
import UserReducer from "./User";
import LoggedUserReducer from "./LoggedUser";

export default () => {
  const store = createStore(
    combineReducers({
      users: UserReducer,
      loggedUser: LoggedUserReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
