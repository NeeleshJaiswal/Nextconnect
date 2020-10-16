import React, { useState, useEffect, useReducer, createContext } from 'react';
import axios from 'axios';
import { apiCall } from '../services/api';
import reducer from '../reducers/user.reducer';
export const UserContext = createContext();

export function UserProvider(props) {
	const initialState = {
		isAuthenticated: false,
		user: {}
	};
	const [ user, dispatch ] = useReducer(reducer, initialState);
	const [ userDict, setUserDict ] = useState(null);

	useEffect(
		() => {
			const fetchData = async () => {
				const result = await axios.get('http://localhost:8081/api/users');

				setUserDict(result.data);
			};

			fetchData();
		},
		[ user ]
	);

	const changeUser = (type, userData) => {
		return new Promise((resolve, reject) => {
			return apiCall('post', `http://localhost:8081/api/auth/${type}`, userData)
				.then(({ token, ...user }) => {
					localStorage.setItem('token', token);

					dispatch({ type: 'SET_CURRENT_USER', user });
					resolve();
				})
				.catch((err) => {
					console.log(err.message);
					reject();
				});
		});
	};

	return (
		<UserContext.Provider value={{ user, dispatch, changeUser, userDict }}>{props.children}</UserContext.Provider>
	);
}
