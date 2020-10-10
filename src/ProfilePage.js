import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ProfilePageStyles';
import { Container, Grid, Paper } from '@material-ui/core';

import UserDetail from './UserDetail';
import UserPost from './UserPost';
function ProfilePage(props) {
	const { id } = props.match.params;
	const { classes } = props;

	return (
		<Container className={classes.root} maxWidth="lg">
			<Grid container spacing={3}>
				<Grid item sm={5}>
					<Paper className={classes.fixed}>
						<UserDetail id={id} />
					</Paper>
				</Grid>

				<Grid item sm={7}>
					<Paper className={classes.paper}>
						<UserPost id={id} />
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
}

export default withStyles(styles)(ProfilePage);
