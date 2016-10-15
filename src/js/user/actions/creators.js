import {
	INIT_USER,
	LOGOUT_USER
} from './types';

export const initUser = (user) => {
	return {
		type: INIT_USER,
		user
	};
};

export const logoutUser = () => {
	return {
		type: LOGOUT_USER
	};
};