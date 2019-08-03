import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import RegistrationPage from "../components/pages/RegistrationPage";
import LoginPage from "../components/pages/LoginPage";
import NavBar from "../components/NavBar";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={RegistrationPage} exact={true} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  loggedUser: state.loggedUser,
});

export default connect(mapStateToProps)(AppRouter);
