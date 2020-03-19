import setError from '../../utils/errorHandler';
import setAlert from '../../utils/alertHandler';

export const sendMessage = (message, history) => async (
  dispatch,
  getState,
  api
) => {
  try {
    const { data } = await api.post('/api/contacts', message);
    if (data.success) {
      setAlert(data, dispatch);
      setTimeout(() => history.push('/'), 5000);
    }
  } catch (ex) {
    setError(ex, dispatch);
  }
};

export const getResume = (user, history) => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post('/api/resume', user);
    if (data.success) {
      setAlert(data, dispatch);
      setTimeout(() => history.push('/'), 5000);
    }
  } catch (ex) {
    setError(ex, dispatch);
  }
};

export const dowloadResume = (token, history) => async (
  dispatch,
  getState,
  api
) => {
  try {
    const resetToken = { token };
    const { data } = await api.post('/api/resume/download', resetToken);
    if (data.success) return (window.location = data.url);
  } catch (ex) {
    history.push('/resume');
    setError(ex, dispatch);
  }
};
