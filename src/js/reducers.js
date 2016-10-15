import { routerReducer } from 'react-router-redux';
import userReducer from './user/reducers';

export default (state = {}, action) => {
	return {
		...state,
		user: userReducer(state.user, action),
		routing: routerReducer(state.routing, action)
	};
};