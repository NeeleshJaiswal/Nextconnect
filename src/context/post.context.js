import React, { useState, createContext } from 'react';
import { apiCallWithToken } from '../services/api';
export const PostContext = createContext();

export function PostProvider(props) {
	const [ Posts, setPosts ] = useState(null);
	const changePost = () => {
		return new Promise((resolve, reject) => {
			return apiCallWithToken('get', 'http://localhost:8081/api/posts')
				.then(({ ...posts }) => {
					setPosts(posts);
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
				.then(() => {
					changePost();
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
				.then(() => {
					changePost();
				})
				.catch((err) => {
					console.log(err.message);
				});
		});
	};

	return (
		<PostContext.Provider value={{ Posts, setPosts, changePost, createPost, addCommentToPost }}>
			{props.children}
		</PostContext.Provider>
	);
}
