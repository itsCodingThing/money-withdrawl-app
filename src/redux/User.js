const UserDefaultState = [];
/* 
  const userState = {
    name: "",
    account: "",
    amount: "",
    mobile: "",
    history: []
  }
*/

export default (state = UserDefaultState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.user];

    case "ADD_MONEY":
      return state.map(user => {
        if (user.account === action.account) {
          return {
            ...user,
            amount: user.amount + action.amount,
            history: [...user.history, { ...action.history }],
          };
        } else {
          return user;
        }
      });

    case "WITHDRAWL_MONEY":
      return state.map(user => {
        if (user.account === action.account) {
          return {
            ...user,
            amount: user.amount - action.amount,
            history: [...user.history, { ...action.history }],
          };
        } else {
          return user;
        }
      });

    default:
      return state;
  }
};
