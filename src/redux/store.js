import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducers from './reducers';
export default createStore(rootReducers, applyMiddleware(thunk, createLogger));