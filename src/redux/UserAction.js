// ADD_USER
export const addUser = ({ name = "", mobile = "", account = "" } = {}) => ({
  type: "ADD_USER",
  user: {
    name,
    mobile,
    account,
  },
});

// REMOVE_USER
// export const removeUser = ({ email } = {}) => ({
//   type: "REMOVE_USER",
//   email
// });
