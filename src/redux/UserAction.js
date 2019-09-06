export const addUser = ({ name = "", mobile = "", account = "", history = [], amount = 0 } = {}) => ({
  type: "ADD_USER",
  user: {
    name,
    mobile,
    account,
    history,
    amount,
  },
});

export const addMoney = ({ account, amount, history }) => ({
  type: "ADD_MONEY",
  account,
  amount,
  history,
});

export const withdrawlMoney = ({ account, amount, history }) => ({
  type: "WITHDRAWL_MONEY",
  account,
  amount,
  history,
});
