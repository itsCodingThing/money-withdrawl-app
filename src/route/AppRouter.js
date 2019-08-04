import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RegistrationPage from "../pages/RegistrationPage";
import MaterialAppBar from "../components/MaterialAppBar";
import AccountBalance from "../pages/AccountBalance";

function AppRouter() {
  return (
    <Router>
      <MaterialAppBar />
      <Switch>
        <Route path="/" component={RegistrationPage} exact={true} />
        <Route path="/account" component={AccountBalance} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
