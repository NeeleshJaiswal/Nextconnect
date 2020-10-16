import { Grid, Paper, Typography, FormControl, Input, InputLabel, Button, Container, Modal } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormStyles';
import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { UserContext } from './context/user.context';
import { PostContext } from './context/post.context';
function AuthForm({ signup, buttonText, heading, classes, history }) {
	const [ email, setEmail ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ profileImageUrl, setProfileImageUrl ] = useState('');
	const { changeUser } = useContext(UserContext);
	const { changePost } = useContext(PostContext);
	const [ open, setOpen ] = useState(false);
	const type = signup ? 'signup' : 'signin';
	const userData = signup ? { email, username, password, profileImageUrl } : { email, password };

	const body = (
		<div className={classes.modal}>
			<h2 id="simple-modal-title">ERROR!!</h2>
			<p id="simple-modal-description">
				{signup ? 'Sorry, that username and/or email is taken' : 'Invalid Email/Password'}
			</p>
			<button type="button" onClick={() => setOpen(false)}>
				CLOSE
			</button>
		</div>
	);

	return (
		<Container maxWidth="sm">
			<Paper className={classes.paper}>
				<Grid container direction="column" justify="center" alignItems="center">
					<Typography variant="h5">{heading}</Typography>
					<form
						className={classes.form}
						onSubmit={(e) => {
							e.preventDefault();
							changeUser(type, userData)
								.then(() => {
									changePost()
										.then(() => {
											history.push('/posts');
										})
										.catch((err) => console.log(err));
								})
								.catch((err) => {
									console.log(err);
									setOpen(true);
								});
						}}
					>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="email">Email</InputLabel>
							<Input
								className={classes.input}
								id="email"
								name="email"
								type="email"
								color="primary"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								autoFocus
							/>
						</FormControl>
						{signup && (
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="username">Username</InputLabel>
								<Input
									className={classes.input}
									id="username"
									name="username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</FormControl>
						)}
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input
								className={classes.input}
								id="password"
								name="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</FormControl>
						{signup && (
							<FormControl margin="normal" fullWidth>
								<InputLabel htmlFor="profileImageUrl">Profile Image Url</InputLabel>
								<Input
									className={classes.input}
									id="profileImageUrl"
									name="profileImageUrl"
									value={profileImageUrl}
									onChange={(e) => setProfileImageUrl(e.target.value)}
								/>
							</FormControl>
						)}
						<Button variant="outlined" type="submit" fullWidth color="inherit" className={classes.submit}>
							{buttonText}
						</Button>
					</form>
					<Modal
						open={open}
						onClose={() => setOpen(false)}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
					>
						{body}
					</Modal>
				</Grid>
			</Paper>
		</Container>
	);
}
export default withRouter(withStyles(styles)(AuthForm));
