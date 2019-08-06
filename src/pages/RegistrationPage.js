import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import RegistrationForm from "../components/RegistrationForm";

const useStyles = makeStyles({
  page: {
    marginTop: "70px",
  },
  form: {
    marginTop: "10px",
    padding: "10px",
  },
});

function RegistrationPage() {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Container maxWidth="sm">
        <Typography align="center" color="textPrimary" variant="h3">
          Registration Form
        </Typography>
        <form className={classes.form}>
          <RegistrationForm />
        </form>
      </Container>
    </div>
  );
}

export default RegistrationPage;
