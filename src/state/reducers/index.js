import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import alertReducer from './alertReducer';
import resumeReducer from './resumeReducer';
export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  alert: alertReducer,
  token: resumeReducer
});
