import {CHANGE_LIST} from './constants';

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = (server) => {
  // http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE
  // 浏览器运行
  // /api/news.json = http://localhost:3000/api/news.json
  // 服务器运行
  // /api/news.json = 服务器根目录下/api/news.json

  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/news.json?secret=PP87ANTIPIRATE')
          .then(res => {
            const list = res.data.data;
            dispatch(changeList(list));
          });
  }
};