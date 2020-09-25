import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PageContentStyles';
import { UserProvider } from './context/user.context';
import { PostProvider } from './context/post.context';
import './PostContent.css';
function PageContent(props) {
	const { classes } = props;
	return (
		<div className={classes.transition}>
			<UserProvider>
				<Navbar />
				<PostProvider>
					<Main />
				</PostProvider>
			</UserProvider>
		</div>
	);
}

export default withStyles(styles)(PageContent);
