import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import CombineReducers from './AppReducers';
const middleware = [];
middleware.push(ReduxThunk);
if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
}

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const AppStore = createStore(CombineReducers, componseEnhancers(applyMiddleware(...middleware)));