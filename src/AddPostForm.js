import React from 'react';
import { PostContext } from './context/post.context';
import { UserContext } from './context/user.context';
import { withRouter } from 'react-router-dom';
import {
	Fab,
	Collapse,
	Container,
	Paper,
	Grid,
	Typography,
	FormControl,
	TextField,
	FormControlLabel,
	Switch,
	Button
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/AddPostFormStyles';

function AddPostForm({ classes, history }) {
	const [ showForm, setShowForm ] = React.useState(false);
	const [ text, setText ] = React.useState('');
	const [ imageUrl, setImageUrl ] = React.useState('');
	const [ isImage, setIsImage ] = React.useState(false);
	const { createPost } = React.useContext(PostContext);
	const { user } = React.useContext(UserContext);

	const handleChange = () => {
		setShowForm((prev) => !prev);
	};

	return (
		<div>
			<Collapse style={{ position: 'fixed' }} in={showForm}>
				<Container maxWidth="sm">
					<Paper className={classes.paper}>
						<Grid container direction="column" justify="center" alignItems="center">
							<Typography variant="h5">Add Post</Typography>
							<form
								className={classes.form}
								onSubmit={(e) => {
									e.preventDefault();
									createPost({
										text,
										imageUrl,
										isImage,
										postedBy: user.id
									});
									setText('');
									setImageUrl('');
									setIsImage(false);
									setShowForm(false);

									history.push('/posts');
								}}
							>
								<FormControl margin="normal" required fullWidth>
									<TextField
										required
										id="text"
										placeholder={`What's on your mind ?`}
										multiline
										rowsMax={10}
										value={text}
										onChange={(e) => setText(e.target.value)}
									/>
								</FormControl>

								<FormControlLabel
									control={
										<Switch
											checked={isImage}
											onChange={(e) => {
												setIsImage(!isImage);
												setImageUrl('');
											}}
											name="isImage"
										/>
									}
									label="Include images"
								/>

								{isImage && (
									<FormControl margin="normal" required fullWidth>
										<TextField
											required
											id="imageUrl"
											label="Image Url"
											multiline
											rowsMax={4}
											value={imageUrl}
											onChange={(e) => setImageUrl(e.target.value)}
										/>
									</FormControl>
								)}
								<Button
									variant="outlined"
									type="submit"
									fullWidth
									color="inherit"
									className={classes.submit}
								>
									Submit
								</Button>
							</form>
						</Grid>
					</Paper>
				</Container>
			</Collapse>

			<Fab
				style={{
					margin: 0,
					top: 'auto',
					right: 20,
					bottom: 20,
					left: 'auto',
					position: 'fixed'
				}}
				color="primary"
				aria-label="add"
				onClick={handleChange}
			>
				<AddIcon />
			</Fab>
		</div>
	);
}

export default withRouter(withStyles(styles)(AddPostForm));
