import { CREATE_LEAGUE, DELETE_LEAGUE } from '../actions/types';
import createLeague from './create-league';
import deleteLeague from './delete-league';

export default (state, action) => {
  switch (action.type) {
    case CREATE_LEAGUE:
      return createLeague(state, action); // TODO: only pass subset of state
    case DELETE_LEAGUE:
      return deleteLeague(state, action); // TODO: only pass subset of state
    default:
      return { ...state };
  }
};
