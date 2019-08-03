//LOGGED IN
export const loggedIn = ({ email = "" } = {}) => ({
  type: "USER_LOGGED_IN",
  email
});

//LOGGED OUT
export const loggedOut = ({ email = "" } = {}) => ({
  type: "USER_LOGGED_OUT",
  email
});
