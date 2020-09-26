import axios from 'axios';

export function setTokenHeader(token) {
	if (token) {
		console.log('lolee');
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
}

export function apiCall(method, path, data) {
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, OPTIONS';
	//axios.defaults.headers.common['Content-Type'] = 'application/json';
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	return new Promise((resolve, reject) => {
		return axios
			[method](path, data)
			.then((res) => {
				return resolve(res.data);
			})
			.catch((err) => {
				return reject(err.response.data.error);
			});
	});
}
export function apiCallWithToken(method, path, data) {
	const token = localStorage.getItem('token');
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, OPTIONS';
	axios.defaults.headers.common['Content-Type'] = 'application/json';
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	return new Promise((resolve, reject) => {
		return axios
			[method](path, data)
			.then((res) => {
				return resolve(res.data);
			})
			.catch((err) => {
				console.log(err);
				//return reject(err.response.data.error);
			});
	});
}
