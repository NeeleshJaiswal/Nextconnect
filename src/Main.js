import React from 'react';
import Homepage from './Homepage';
import Postpage from './Postpage';
import AuthForm from './AuthForm';
import ProfilePage from './ProfilePage';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';
function Main(props) {
	return (
		<Container>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/posts" component={Postpage} />
				<Route exact path="/profile/:id" component={ProfilePage} />
				<Route
					path="/signin"
					render={() => {
						return <AuthForm buttonText="Log in" heading="Welcome back!" />;
					}}
				/>
				<Route
					path="/signup"
					render={() => {
						return <AuthForm signup buttonText="Sign me up" heading="Join Heroku today!" />;
					}}
				/>
			</Switch>
		</Container>
	);
}
export default withRouter(Main);
