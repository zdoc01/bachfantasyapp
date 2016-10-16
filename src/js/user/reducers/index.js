import {
	INIT_USER,
	LOGOUT_USER
} from '../actions/types';

export default (state, action) => {
	switch(action.type) {
		case INIT_USER:
			return { ...action.user };
			break;
		case LOGOUT_USER:
			return {};
	}

	return { ...state };
};