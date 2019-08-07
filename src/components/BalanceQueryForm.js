import React from "react";
import { connect } from "react-redux";
import format from "date-fns/format";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";

import { addMoney, withdrawlMoney } from "../redux/UserAction";

import StatementTable from "../components/StatementTable";

const action = [
  {
    label: "Add Money",
    value: "add",
  },
  {
    label: "Withdrawl Money",
    value: "withdrawl",
  },
];

const useStyles = makeStyles({
  page: {
    marginTop: "70px",
  },
  fields: {
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
  },
  textField: {
    width: "150px",
    flexBasis: "200",
  },
  btnField: {
    widht: "100px",
    display: "flex",
    alignItems: "center",
  },
  btn: {
    margin: "5px",
  },
});

function BalanceQueryForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    account: "",
    amount: "",
    action: "",
  });

  const [history, setHistory] = React.useState({
    history: [],
    totalAmount: 0,
  });

  const onChangeText = e => {
    let value = e.target.value;
    let name = e.target.name;

    if (name === "amount") {
      setValues({ ...values, [name]: Number(value) });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const onClickHistory = () => {
    if (values.account === "") {
      alert("Please enter account number to get history");
    } else {
      if (checkUserExists()) {
        props.users.forEach(user => {
          if (user.account === values.account) {
            setHistory({ history: [...user.history], totalAmount: user.amount });
            setValues({
              account: "",
              amount: "",
              action: "",
            });
          }
        });
      } else {
        alert("User does'nt exists!!!");
      }
    }
  };

  const checkUserExists = () => {
    let found = false;
    props.users.forEach(user => {
      if (user.account === values.account) {
        found = true;
      }
    });
    return found;
  };

  const getCurrentAmount = () => {
    let bal = 0;
    props.users.forEach(user => {
      if (user.account === values.account) {
        bal = user.amount;
      }
    });

    return bal;
  };

  const onClickSubmit = () => {
    let history = {
      ...values,
      date: format(new Date(), "ddd D MMM"),
      time: format(new Date(), "hh:mm A"),
    };

    let currentAmount = getCurrentAmount();

    if (!(values.account === "" && values.action === "" && values.amount === "")) {
      if (checkUserExists()) {
        if (values.action === "add") {
          props.dispatch(addMoney({ account: values.account, amount: values.amount, history }));
        } else if (values.action === "withdrawl") {
          if (currentAmount >= values.amount) {
            props.dispatch(withdrawlMoney({ account: values.account, amount: values.amount, history }));
          } else {
            alert("You have insuffucient balance!!!");
          }
        }
      } else {
        alert("User does'nt exists!!!");
      }
    } else {
      alert("Please fill all the inputs 🙏");
    }
  };

  return (
    <Container>
      <div className={classes.fields}>
        <div className={classes.textField}>
          <TextField label="Account" value={values.account} name="account" onChange={onChangeText} />
        </div>
        <div className={classes.textField}>
          <TextField
            label="Amount"
            value={values.amount}
            name="amount"
            onChange={onChangeText}
            InputProps={{
              startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
            }}
          />
        </div>
        <div className={classes.textField}>
          <TextField
            select
            label="Select Action"
            value={values.action}
            name="action"
            onChange={onChangeText}
            className={classes.textField}
          >
            {action.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={classes.btnField}>
          <Button className={classes.btn} size="small" variant="contained" color="primary" onClick={onClickSubmit}>
            Submit
          </Button>
          <Button className={classes.btn} size="small" variant="contained" color="primary" onClick={onClickHistory}>
            History
          </Button>
        </div>
      </div>
      <StatementTable history={history.history} totalAmount={history.totalAmount} />
    </Container>
  );
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(BalanceQueryForm);
