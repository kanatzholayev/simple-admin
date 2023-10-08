import users from './users.json';

export const apiService = {
	getUsers: () =>
		new Promise(resolve => {
			resolve(users);
		}),
};
