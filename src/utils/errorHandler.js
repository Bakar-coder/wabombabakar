import { SET_ERROR, REMOVE_ERROR } from '../state/types';

export default (ex, dispatch) => {
  if (
    (ex && ex.response && ex.response.status >= 400) ||
    (ex && ex.response && ex.response.status <= 500)
  ) {
    const { data } = ex.response;
    setTimeout(() => dispatch({ type: REMOVE_ERROR }), 3000);
    return dispatch({
      type: SET_ERROR,
      payload: data.msg || `Internal server error! - ${ex.message}`
    });
  } else {
    console.log(ex);
    setTimeout(() => dispatch({ type: REMOVE_ERROR }), 3000);
    return dispatch({
      type: SET_ERROR,
      payload: `Oops! - something went wrong -  ${ex.message}`
    });
  }
};
