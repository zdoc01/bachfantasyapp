import userReducer from './user/reducers';

export default (state = {}, action) => ({
  ...state,
  user: userReducer(state.user, action),
});
