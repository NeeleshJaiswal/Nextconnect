import { AppBar, IconButton, Toolbar, Typography, Grid, Link, Tooltip, Avatar } from '@material-ui/core';
import React, { useContext } from 'react';
import DynamicFeedOutlinedIcon from '@material-ui/icons/DynamicFeedOutlined';
import { withRouter } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles';
import { UserContext } from './context/user.context';
import { Link as Linker } from 'react-router-dom';

function Navbar(props) {
	const { user, dispatch } = useContext(UserContext);

	let userLoggedIn = <div />;
	const { classes, history } = props;

	if (user.isAuthenticated) {
		const str = '/profile/' + user.user.id;
		userLoggedIn = (
			<Grid container direction="row" justify="flex-end" alignItems="center">
				{user && (
					<Typography variant="h6" color="textPrimary" className={classes.right}>
						Hello {user.user.username}!
					</Typography>
				)}
				<Linker to={str}>
					<Avatar alt={user.user.username} src={user.user.profileImageUrl} className={classes.small} />
				</Linker>
				{/* <Link href={str}>
					<Avatar alt={user.user.username} src={user.user.profileImageUrl} className={classes.small} />
				</Link> */}

				<Typography variant="h6" color="secondary">
					<Link href="#" color="secondary" className={classes.right}>
						<Tooltip title="Log out">
							<IconButton
								onClick={(e) => {
									e.preventDefault();
									dispatch({ type: 'REMOVE_USER' });
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
					{user.isAuthenticated ? (
						<Linker to="/posts">
							<Typography className={classes.link} variant="h5" color="inherit">
								Heroku
							</Typography>
						</Linker>
					) : (
						<Typography variant="h5" color="inherit">
							Heroku
						</Typography>
					)}
					{user.isAuthenticated ? userLoggedIn : userLoggedOut}
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withRouter(withStyles(styles)(Navbar));
