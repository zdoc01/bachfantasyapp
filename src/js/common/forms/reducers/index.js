import { SUBMIT } from '../actions/types';

const behaviors = {
  [SUBMIT](state /* , action */) {
    // const { form, callback } = action;
    return state;
  },
};

export default (state, action) => {
  /* eslint-disable-next-line no-console */
  console.log('handling form action... ', action.type);
  const behavior = behaviors[action.type];
  return behavior ? behavior(state, action) : state;
};
