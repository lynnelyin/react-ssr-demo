import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as homeReducer} from '../containers/Home/store';

const reducer = combineReducers({
  home: homeReducer
});

/*
// 这样 store 是单例的，所有用户访问到的都是同一个 store
const store = createStore(reducer, applyMiddleware(thunk));
*/

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
}

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk));
};