// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './rootReducer';

const rootRedu = combineReducers({
    scroll: rootReducer,
});

const store = createStore(rootRedu, applyMiddleware(thunk));

export default store;