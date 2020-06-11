import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as homeReducer} from '../containers/Home/store';
import {reducer as headerReducer} from '../components/Header/store';
import clientAxios from '../client/request';
import serverAxios from '../server/request';

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer
});

/*
// 这样 store 是单例的，所有用户访问到的都是同一个 store
const store = createStore(reducer, applyMiddleware(thunk));
*/

export const getStore = (req) => {
  // 改变服务器端store的内容，那么就一定要使用serverAxios
  // withExtraArgument传递的参数，可以在异步action的第三个参数中获取到
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
}

export const getClientStore = () => {
  const defaultState = window.context.state;
  // 改变客户端store的内容，一定要使用clientAxios
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};