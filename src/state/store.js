import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../state/reducers';
import Axios from 'axios';

const axiosInstance = Axios.create({
	baseURL: '/api'
});
const initialState = window.INITIAL_STATE;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
	reducers,
	initialState,
	composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);
