import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

import { addUser } from "../redux/UserAction";

const initialState = {
  name: "",
  account: "",
  mobile: "",
};

function checkEmptyInput(values) {
  let check = values.name !== "" && values.mobile !== "" && values.account !== "";
  if (check) {
    return true;
  } else {
    alert("Please fill all the input!");
  }
}

function checkExistingUser(value, userList) {
  let flag = false;
  userList.forEach(user => {
    if (user.name === value.name && user.account === value.account) {
      console.log("user already exists!");
      flag = true;
    }
  });
  return flag;
}

export default class RegForm extends React.Component {
  state = {
    ...initialState,
  };

  onChangeHandler = e => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState(() => ({
      [name]: value,
    }));
  };

  onSingIn = e => {
    e.preventDefault();
    if (checkEmptyInput(this.state) && !checkExistingUser(this.state, this.props.users)) {
      this.props.dispatch(addUser(this.state));
      this.setState(() => ({ ...initialState }));
      console.log("User added to our database👍👍");
    } else {
      console.log("There is a problem😢");
      this.setState(() => ({ ...initialState }));
    }
  };

  render() {
    let { name, mobile, account } = this.state;
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="nameLabel">Name</Label>
              <Input
                type="text"
                name="name"
                id="nameLabel"
                placeholder="Enter your Name"
                value={name}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="moblieLabel">Mobile</Label>
              <Input
                type="text"
                name="mobile"
                id="mobileLabel"
                placeholder="Enter your number"
                value={mobile}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="accountLabel">Account</Label>
          <Input
            type="text"
            name="account"
            id="accountLabel"
            placeholder="Enter your Account"
            value={account}
            onChange={this.onChangeHandler}
          />
        </FormGroup>
        <Link to="/login">
          <Button onClick={this.onSingIn} color="primary">
            Submit
          </Button>
        </Link>
      </Form>
    );
  }
}
