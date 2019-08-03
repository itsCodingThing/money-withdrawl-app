// ADD_USER
export const addUser = ({ email = "", password = "", address = "", state = "", city = "", zip = "" } = {}) => ({
  type: "ADD_USER",
  user: {
    email,
    password,
    address,
    state,
    city,
    zip
  }
});

// REMOVE_USER
export const removeUser = ({ email } = {}) => ({
  type: "REMOVE_USER",
  email
});
