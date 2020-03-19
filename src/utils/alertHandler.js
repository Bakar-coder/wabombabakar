import { SET_ALERT, REMOVE_ALERT } from '../state/types';

export default (data, dispatch) => {
  const { msg } = data;
  setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  return dispatch({
    type: SET_ALERT,
    payload: msg
  });
};
