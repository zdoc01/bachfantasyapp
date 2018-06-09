import { INIT_USER, LOGOUT_USER } from './types';

export const initUser = user => ({
  type: INIT_USER,
  user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
