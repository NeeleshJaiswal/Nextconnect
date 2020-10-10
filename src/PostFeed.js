import React, { useContext } from 'react';
import PostItem from './PostItem';
import { PostContext } from './context/post.context';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styles from './styles/PostFeedStyles';
import { List, Paper, Container, Grid } from '@material-ui/core';
const theme = createMuiTheme({
	typography: {
		fontSize: 16
	}
});

function PostFeed(props) {
	const { Posts } = useContext(PostContext);
	const { classes } = props;
	let postsItems;
	if (Posts.posts) {
		const { posts } = Posts;
		postsItems = posts.map((post, i) => <PostItem key={i} post={post} flag={true} />);
	} else {
		postsItems = <div />;
	}

	return (
		<ThemeProvider theme={theme}>
			<Container className={classes.root} maxWidth="sm">
				<Paper className={classes.paper}>
					<List className={classes.root}>
						<Grid container spacing={3}>
							{postsItems}
						</Grid>
					</List>
				</Paper>
			</Container>
			)
		</ThemeProvider>
	);
}

export default withStyles(styles)(PostFeed);
