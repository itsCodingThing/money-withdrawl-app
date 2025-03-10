import React from "react";
import { connect } from "react-redux";

import { addUser } from "../redux/UserAction";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    padding: "8px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textField: {
    width: "100%",
    marginBottom: "20px",
  },
}));

const initialState = {
  name: "bhanu",
  mobile: "6350060561",
  account: "0123456789",
};

function RegistrationForm(props) {
  const classes = useStyles();
  const [inputValue, setInputValue] = React.useState({
    ...initialState,
  });

  const onChangeText = e => {
    let text = e.target.value;
    let name = e.target.name;
    setInputValue({ ...inputValue, [name]: text });
  };

  const checkExistingUser = () => {
    let found = false;
    props.users.forEach(user => {
      if (user.account === inputValue.account && user.name === inputValue.name) {
        found = true;
      }
    });

    return found;
  };

  const onClickSubmit = () => {
    if (!(inputValue.name === "" && inputValue.mobile === "" && inputValue.account === "")) {
      if (checkExistingUser()) {
        alert("User is already Exists!!");
      } else {
        console.log(inputValue);
        props.dispatch(addUser(inputValue));
      }
    } else {
      alert("Please fill all the inputs 🙏");
    }
  };

  return (
    <Paper className={classes.paper}>
      <TextField
        label="Name"
        name="name"
        value={inputValue.name}
        onChange={onChangeText}
        className={classes.textField}
      />
      <TextField
        label="Mobile"
        name="mobile"
        value={inputValue.mobile}
        onChange={onChangeText}
        className={classes.textField}
      />
      <TextField
        label="Account"
        name="account"
        value={inputValue.account}
        onChange={onChangeText}
        className={classes.textField}
      />
      <Button variant="contained" color="primary" onClick={onClickSubmit}>
        Submit
      </Button>
    </Paper>
  );
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(RegistrationForm);
