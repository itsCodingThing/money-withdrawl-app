import React from "react";
import { Container, Button } from "reactstrap";
import { connect } from "react-redux";

import { loggedOut } from "../../redux/LoggedAction";

class UserPage extends React.Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.loggedUser === "") {
      console.log("user is successfully 👍 loggedout");
      this.props.history.push("/login");
    } else {
      console.log("sorry user is not logged out there is problem");
    }
  }

  onClick = () => {
    this.props.dispatch(loggedOut({ email: this.props.loggedUser.email }));
  };

  render() {
    return (
      <Container>
        <p>User {this.props.loggedUser} successfully 👌 logged in</p>
        <Button color="primary" onClick={this.onClick}>
          Logout
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loggedUser: state.loggedUser.email,
});

export default connect(mapStateToProps)(UserPage);
