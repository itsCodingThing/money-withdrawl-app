import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  page: {
    marginTop: "70px",
  },
});

function RegistrationPage() {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Container maxWidth="sm">
        <h1>Hello My Friend aagye fir se Marwane</h1>
      </Container>
    </div>
  );
}

export default RegistrationPage;
