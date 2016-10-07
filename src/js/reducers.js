import { leagues } from './leagues/reducers';

const initialState = {};

export default (state = initialState, action) => {
	return {
		...state
		// leagues: leagues(state.leagues, action)
	};
};