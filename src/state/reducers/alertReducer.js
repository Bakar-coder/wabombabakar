import { SET_ALERT, REMOVE_ALERT } from '../types';

const errorsState = {
  msg: null
};

export default (state = errorsState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        msg: payload
      };
    case REMOVE_ALERT:
      return {
        ...state,
        msg: null
      };
    default:
      return state;
  }
};
