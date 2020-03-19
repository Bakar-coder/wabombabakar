import { SET_ERROR, REMOVE_ERROR } from '../types';

const errorsState = {
  error: null
};

export default (state = errorsState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ERROR:
      return {
        ...state,
        error: payload
      };
    case REMOVE_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
