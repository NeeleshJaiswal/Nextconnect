import React, { useState, createContext } from 'react';
import { apiCall } from '../services/api';
export const UserContext = createContext();

export function UserProvider(props) {
	const [ user, setUser ] = useState(null);
	const [ userDict, setUserDict ] = useState(null);

	const changeUser = (type, userData) => {
		return new Promise((resolve, reject) => {
			return apiCall('post', `http://localhost:8081/api/auth/${type}`, userData)
				.then(({ token, ...user }) => {
					localStorage.setItem('token', token);
					//setTokenHeader(token);

					setUser(user);
				})
				.catch((err) => {
					console.log(err.message);
				});
		});
	};
	const changeUserDict = () => {
		return new Promise((resolve, reject) => {
			return apiCall('get', 'http://localhost:8081/api/users')
				.then(({ ...users }) => {
					localStorage.setItem('users', users);
					setUserDict(users);
				})
				.catch((err) => {
					console.log(err.message);
				});
		});
	};

	return (
		<UserContext.Provider value={{ user, setUser, changeUser, userDict, changeUserDict }}>
			{props.children}
		</UserContext.Provider>
	);
}
