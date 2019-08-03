const defaultState = {
	email: "",
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case "USER_LOGGED_IN":
			return { email: action.email };
		case "USER_LOGGED_OUT":
			return { email: "" };
		default:
			return state;
	}
};
