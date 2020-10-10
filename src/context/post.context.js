import React, { useReducer, createContext } from 'react';
import { apiCallWithToken } from '../services/api';
import reducer from '../reducers/post.reducer';
export const PostContext = createContext();

export function PostProvider(props) {
	const initialState = [];
	const [ Posts, dispatch ] = useReducer(reducer, initialState);
	const changePost = () => {
		return new Promise((resolve, reject) => {
			return apiCallWithToken('get', 'http://localhost:8081/api/posts')
				.then(({ ...posts }) => {
					dispatch({ type: 'GET_POST', posts });
				})
				.catch((err) => {
					console.log(err.message);
				});
		});
	};
	const createPost = (postData) => {
		const { postedBy } = postData;
		return new Promise((resolve, reject) => {
			return apiCallWithToken('post', `http://localhost:8081/api/users/${postedBy}/posts`, postData)
				.then(({ ...post }) => {
					dispatch({ type: 'CREATE_POST', payload: post });
				})
				.catch((err) => {
					console.log(err.message);
				});
		});
	};

	const deletePost = (userId, postId) => {
		return new Promise((resolve, reject) => {
			return apiCallWithToken('delete', `http://localhost:8081/api/users/${userId}/posts/${postId}`)
				.then(() => {
					dispatch({ type: 'DELETE_POST', id: postId });
				})
				.catch((err) => {
					console.log(err.message);
				});
		});
	};

	const addRemoveLike = (userId, postId, type) => {
		return new Promise((resolve, reject) => {
			return apiCallWithToken('post', `http://localhost:8081/api/users/${userId}/posts/${postId}/${type}`)
				.then(({ ...post }) => {
					dispatch({ type: 'ADD_REMOVE_LIKE', payload: post });
				})
				.catch((err) => {
					console.log(err.message);
				});
		});
	};

	const addCommentToPost = (commentData) => {
		const { commentedBy, commentedOn } = commentData;
		return new Promise((resolve, reject) => {
			return apiCallWithToken(
				'post',
				`http://localhost:8081/api/users/${commentedBy}/posts/${commentedOn}/comments`,
				commentData
			)
				.then(({ ...comment }) => {
					const payload = {
						_id: comment._id,
						text: comment.text,
						commentedBy: comment.commentedBy._id,
						createdAt: comment.createdAt
					};
					dispatch({ type: 'ADD_COMMENT', postId: commentedOn, payload });
				})
				.catch((err) => {
					console.log(err.message);
				});
		});
	};

	return (
		<PostContext.Provider value={{ Posts, changePost, createPost, deletePost, addCommentToPost, addRemoveLike }}>
			{props.children}
		</PostContext.Provider>
	);
}
