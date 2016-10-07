import {
	CREATE_LEAGUE,
	DELETE_LEAGUE
} from '../actions/types';
import createLeague from './create-league';
import deleteLeague from './delete-league';

export default (state, action) => {
	const s = state;
	switch(action.type) {
		case CREATE_LEAGUE:
			return createLeague(state, action); // only pass subset of state
			break;
		case DELETE_LEAGUE:
			return deleteLeague(state, action); // only pass subset of state
			break;
	}

	return s;
};