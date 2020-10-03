function postReducer(state, action) {
	switch (action.type) {
		case 'GET_POST':
			return action.posts;
		default:
			return state;
	}
}

export default postReducer;
