import React from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";

import RegForm from "../Form";

const mapStateToProps = state => ({
  users: state.users,
});

const ReduxForm = connect(mapStateToProps)(RegForm);

function RegistrationPage() {
  return (
    <Container>
      <ReduxForm />
    </Container>
  );
}

export default RegistrationPage;
