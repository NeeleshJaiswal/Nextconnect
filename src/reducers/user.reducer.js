function userReducer(state, action) {
	switch (action.type) {
		case 'SET_CURRENT_USER':
			return {
				user: action.user,
				isAuthenticated: !!Object.keys(action.user).length
			};
		case 'REMOVE_USER':
			return {
				user: {},
				isAuthenticated: false
			};
		default:
			return state;
	}
}

export default userReducer;
