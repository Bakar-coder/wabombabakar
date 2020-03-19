import { SET_TOKEN, REMOVE_TOKEN } from '../types';

const errorsState = {
  token: null
};

export default (state = errorsState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        token: payload
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};
