import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import { Grid, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
	typography: {
		fontSize: 16
	}
});
export default function UserPost({ id }) {
	const [ posts, setPosts ] = useState({});
	const [ load, setLoad ] = useState(false);
	const [ error, setError ] = useState('');
	useEffect(
		() => {
			const token = localStorage.getItem('token');
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			axios
				.get(`http://localhost:8081/api/users/${id}/post`)
				.then((res) => {
					setPosts(res.data);
					setLoad(true);
				})
				.catch((err) => {
					setError(err.message);
					setLoad(true);
				});
		},
		[ id ]
	);

	if (load) {
		if (posts.length === 0) {
			return <div>No post posted by the user</div>;
		} else {
			const element = posts.map((post, i) => <PostItem key={i} post={post} flag={false} />);
			return (
				<div>
					{error ? (
						<p>{error.message}</p>
					) : (
						<ThemeProvider theme={theme}>
							<Grid container spacing={3} direction="column" justify="center" alignItems="center">
								<Typography color="textPrimary" noWrap={true} variant="h6">
									{posts[0].postedBy.username}'s posts
								</Typography>
								{element}
							</Grid>
						</ThemeProvider>
					)}
				</div>
			);
		}
	} else {
		return <div>Loading...</div>;
	}
}
