import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import BalanceQueryForm from "../components/BalanceQueryForm";

const useStyles = makeStyles({
  page: {
    marginTop: "70px",
  },
  form: {
    padding: "10px",
    margingTop: "10px",
  },
});

function RegistrationPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Typography align="center" color="textPrimary" variant="h3">
        Money Services
      </Typography>
      <Container className={classes.form}>
        <BalanceQueryForm />
      </Container>
    </div>
  );
}
export default RegistrationPage;
