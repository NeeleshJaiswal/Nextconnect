import { Grid, TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/AddCommentFormStyles';
import { PostContext } from './context/post.context';
import { UserContext } from './context/user.context';
function AddCommentForm({ postId, classes, history }) {
	const [ text, setText ] = useState('');
	const { addCommentToPost } = useContext(PostContext);
	const { user } = useContext(UserContext);
	return (
		<form
			className={classes.form}
			onSubmit={(e) => {
				e.preventDefault();
				addCommentToPost({ text, commentedBy: user.id, commentedOn: postId });
				setText('');

				history.push('/posts');
			}}
		>
			<Grid container direction="column" justify="flex-start" alignItems="flex-start">
				<TextField
					required
					className={classes.button}
					id="text"
					label="Comment"
					multiline
					fullWidth
					variant="outlined"
					rowsMax={4}
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>

				<Button className={classes.button} variant="outlined" type="submit">
					Post
				</Button>
			</Grid>
		</form>
	);
}
export default withRouter(withStyles(styles)(AddCommentForm));
