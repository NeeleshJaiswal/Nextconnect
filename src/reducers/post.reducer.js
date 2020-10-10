function postReducer(state, action) {
	switch (action.type) {
		case 'GET_POST':
			return action.posts;
		case 'CREATE_POST':
			return {
				posts: [ ...state.posts, action.payload ]
			};
		case 'DELETE_POST':
			return {
				posts: state.posts.filter((post) => post._id !== action.id)
			};
		case 'ADD_REMOVE_LIKE':
			const posts = state.posts.map((post, i) => {
				if (post._id === action.payload._id) {
					post = action.payload;
					return post;
				}
				return post;
			});

			return {
				posts
			};
		case 'ADD_COMMENT':
			var ind = -1;
			state.posts.forEach((post, i) => {
				if (post._id === action.postId) {
					ind = i;
				}
			});
			state.posts[ind].comments.splice(state.posts[ind].comments.length, 0, action.payload);

			return {
				posts: state.posts
			};

		default:
			return state;
	}
}

export default postReducer;
