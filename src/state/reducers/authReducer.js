import { LOGIN_USER, GET_USER, LOGOUT_USER } from '../types';

const authState = {
  user: null,
  isAuth: false
};

export default (state = authState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        user: payload,
        isAuth: true
      };

    case GET_USER:
      return {
        ...state,
        user: payload,
        isAuth: true
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuth: false
      };
    default:
      return state;
  }
};
