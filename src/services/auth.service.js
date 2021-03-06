import axios from 'axios';

const API_URL = 'http://localhost:3001/api/auth/';

const register = (username, email, password, profileImageUrl) => {
	return axios.post(API_URL + 'signup', {
		username,
		email,
		password,
		profileImageUrl
	});
};

const login = (email, password) => {
	return axios
		.post(API_URL + 'signin', {
			email,
			password
		})
		.then((response) => {
			if (response.data.token) {
				localStorage.setItem('user', JSON.stringify(response.data));
			}

			return response.data;
		});
};

const logout = () => {
	localStorage.removeItem('user');
};

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem('user'));
};

export default {
	register,
	login,
	logout,
	getCurrentUser
};
