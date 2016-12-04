import {applyMiddleware, combineReducers, createStore} from 'redux';
import {routerReducer} from 'react-router-redux';
// import loan from './reducers/loanReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();

const aardvarkAmortizationApp = combineReducers({
  // loan,
  routing: routerReducer
});

export default createStore(aardvarkAmortizationApp, composeWithDevTools(applyMiddleware(thunk, promise, logger)));
