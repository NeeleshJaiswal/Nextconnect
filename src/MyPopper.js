import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Popper, IconButton, Link } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { PostContext } from './context/post.context';
import { UserContext } from './context/user.context';
const useStyles = makeStyles((theme) => ({
	paper: {
		border: '1px solid',
		padding: theme.spacing(1),
		backgroundColor: theme.palette.background.paper
	},
	popper: {
		float: 'right'
	}
}));

function MyPopper({ userId, postId, history }) {
	const { user } = useContext(UserContext);
	const { deletePost } = useContext(PostContext);
	const classes = useStyles();
	const [ anchorEl, setAnchorEl ] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const removePost = (e) => {
		e.preventDefault();
		deletePost(userId, postId);
		setAnchorEl(null);
		history.push('/posts');
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;
	if (user) {
		if (user.id !== userId) {
			return <div />;
		}
	}

	return (
		<React.Fragment>
			<IconButton aria-label="settings" onClick={handleClick}>
				<MoreVertIcon />
			</IconButton>
			<Popper
				className={classes.popper}
				id={id}
				open={open}
				anchorEl={anchorEl}
				placement="left-start"
				transition={true}
			>
				<div className={classes.paper}>
					<Link color="secondary" variant="inherit" underline="none" href="#" onClick={removePost}>
						Delete Post
					</Link>
				</div>
			</Popper>
		</React.Fragment>
	);
}

export default withRouter(MyPopper);
