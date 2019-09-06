import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RegistrationPage from "../pages/RegistrationPage";
import MaterialAppBar from "../components/MaterialAppBar";
import AccountBalancePage from "../pages/AccountBalancePage";

function AppRouter() {
  return (
    <Router>
      <MaterialAppBar />
      <Switch>
        <Route path="/" component={RegistrationPage} exact={true} />
        <Route path="/account" component={AccountBalancePage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
