import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/UserDetailStyles';
import axios from 'axios';
import logo from './assets/icon.svg';
import { Grid, Typography, Avatar } from '@material-ui/core';

function UserDetail({ id, classes }) {
	const [ user, setUser ] = useState({});
	const [ load, setLoad ] = useState(false);
	const [ error, setError ] = useState('');
	useEffect(
		() => {
			const token = localStorage.getItem('token');
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			axios
				.get(`http://localhost:8081/api/users/${id}`)
				.then((res) => {
					setUser(res.data);
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
		const User = user.user;
		const totalComments = User.posts.reduce((acc, next) => {
			return acc + next.comments.length;
		}, 0);
		const totalLikes = User.posts.reduce((acc, next) => {
			return acc + next.likes.length;
		}, 0);
		const element = (
			<Grid container spacing={3} direction="column" justify="center" alignItems="center">
				<Typography align="center" color="secondary" noWrap={true} variant="h5">
					{User.username}
				</Typography>
				<Typography align="center" color="textSecondary" gutterBottom={true} noWrap={true} variant="subtitle1">
					{User.email}
				</Typography>
				<Avatar
					alt={User.username}
					src={User.profileImageUrl === '' ? logo : User.profileImageUrl}
					variant="circle"
					className={classes.large}
				/>
				<hr className={classes.eight} />
				<Grid container spacing={3} direction="row" justify="space-around" alignItems="center">
					<Typography className={classes.text} color="textPrimary" noWrap={true} variant="h5">
						Posts
					</Typography>
					<Typography className={classes.text} color="textPrimary" noWrap={true} variant="h5">
						Comments
					</Typography>
					<Typography className={classes.text} color="textPrimary" noWrap={true} variant="h5">
						Likes
					</Typography>
				</Grid>
				<Grid
					className={classes.values}
					container
					spacing={3}
					direction="row"
					justify="space-around"
					alignItems="center"
				>
					<Typography className={classes.text} color="textPrimary" noWrap={true} variant="h4">
						{User.posts.length}
					</Typography>
					<Typography className={classes.text} color="textPrimary" noWrap={true} variant="h4">
						{totalComments}
					</Typography>
					<Typography className={classes.text} color="textPrimary" noWrap={true} variant="h4">
						{totalLikes}
					</Typography>
				</Grid>
			</Grid>
		);

		return <div>{error ? <p>{error.message}</p> : element}</div>;
	} else {
		return <div>Loading...</div>;
	}
}

export default withStyles(styles)(UserDetail);
