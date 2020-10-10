import React, { useContext } from 'react';
import { PostContext } from './context/post.context';
import PostFeed from './PostFeed';
import AddPostForm from './AddPostForm';
export default function Postpage() {
	const { Posts } = useContext(PostContext);

	if (Posts.posts) {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'flex-start'
				}}
			>
				<PostFeed />

				<AddPostForm />
			</div>
		);
	} else {
		return <div>a</div>;
	}
}
