import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import BalanceQueryForm from "../components/BalanceQueryForm";

const useStyles = makeStyles({
  page: {
    marginTop: "70px",
  },
});

function RegistrationPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <h1>Money Services</h1>
      <Container>
        <BalanceQueryForm />
      </Container>
    </div>
  );
}
export default RegistrationPage;
