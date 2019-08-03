import React from "react";
import { connect } from "react-redux";
import { Button, FormGroup, Label, Input, Row, Col, Form } from "reactstrap";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class LoginPage extends React.Component {
  state = { amount: "", account: "", dropdownOpen: false, action: "Add" };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  handleInputChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(() => ({ [name]: value }));
  };

  onClickEnter = () => {
    let { amount, account, action } = this.state;
    console.log(amount, account, action);
  };

  selectAction = e => {
    let value = e.target.value;
    console.log(value);
    this.setState(() => ({ action: value }));
  };

  render() {
    return (
      <Form className="container">
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="account">A/C</Label>
              <Input
                type="text"
                name="account"
                id="account"
                placeholder="Enter account number"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="account">Amount</Label>
              <Input
                type="text"
                name="amount"
                id="account"
                placeholder="Enter Amount"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
            </FormGroup>
          </Col>
        </Row>
        <div className="mt-2">
          <ButtonDropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>{this.state.action}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem value="add" onClick={this.selectAction}>
                Add Money
              </DropdownItem>
              <DropdownItem value="withdrawl" onClick={this.selectAction}>
                Withdrawl
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <Button className="ml-2" color="primary" onClick={this.onClickEnter}>
            Enter
          </Button>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(LoginPage);
