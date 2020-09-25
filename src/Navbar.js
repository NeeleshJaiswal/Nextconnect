import { AppBar, IconButton, Toolbar, Typography, Link, Grid, Tooltip, Avatar } from '@material-ui/core';
import React, { useContext } from 'react';
import DynamicFeedOutlinedIcon from '@material-ui/icons/DynamicFeedOutlined';
import { withRouter } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles';
import { UserContext } from './context/user.context';

function Navbar(props) {
	const { user, setUser } = useContext(UserContext);
	let userLoggedIn = <div />;
	const { classes, history } = props;
	if (user) {
		userLoggedIn = (
			<Grid container direction="row" justify="flex-end" alignItems="center">
				{user && (
					<Typography variant="h6" color="secondary" className={classes.right}>
						Hello {user.username}!
					</Typography>
				)}
				<Avatar alt={user.username} src={user.profileImageUrl} className={classes.small} />
				<Typography variant="h6" color="secondary">
					<Link href="#" color="secondary" className={classes.right}>
						<Tooltip title="Log out">
							<IconButton
								onClick={(e) => {
									e.preventDefault();
									setUser('');
									history.push('/');
								}}
							>
								<ExitToAppIcon fontSize="large" />
							</IconButton>
						</Tooltip>
					</Link>
				</Typography>
			</Grid>
		);
	}
	const userLoggedOut = (
		<Grid container direction="row" justify="flex-end">
			<Typography variant="h6" color="secondary">
				<Link href="/signup" color="secondary" className={classes.right}>
					<Tooltip title="Sign up">
						<IconButton>
							<PersonAddIcon fontSize="large" />
						</IconButton>
					</Tooltip>
				</Link>
			</Typography>
			<Typography variant="h6" color="secondary">
				<Link href="/signin" color="secondary" className={classes.right}>
					<Tooltip title="Log in">
						<IconButton>
							<VpnKeyIcon fontSize="large" />
						</IconButton>
					</Tooltip>
				</Link>
			</Typography>
		</Grid>
	);

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.transition}>
				<Toolbar>
					<IconButton color="inherit">
						<DynamicFeedOutlinedIcon style={{ fontSize: '2rem' }} />
					</IconButton>
					<Typography variant="h5" color="inherit">
						Heroku
					</Typography>
					{user ? userLoggedIn : userLoggedOut}
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withRouter(withStyles(styles)(Navbar));
