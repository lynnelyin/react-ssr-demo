import express from 'express';
import {render} from './utils';
import {getStore} from '../store';
import routes from '../Routes';
import {matchRoutes} from 'react-router-config';

const app = express();
app.use(express.static('public'));

app.get('*', function (req, res) {
  const store = getStore();

  // 结合当前用户请求地址和路由，做判断，
  // 拿到异步数据，并填充到store之中
  const matchedRoutes = matchRoutes(routes, req.path);

  
  /* 不能匹配多级路由
  const matchRoutes = [];

  routes.some(route => {
    const match = matchPath(req.path, route);
    if (match) {
      matchRoutes.push(route);
    }
  })
  console.log(matchRoutes);
  */

  // 让 matchedRoutes 里面的所有组件，对应的loadData方法执行一次
  const promises = [];

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  })

  Promise.all(promises).then(() => {
    res.send(render(req, routes, store));
  })
});

const server = app.listen(3000);