import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import routes from '../Routes';
import getStore from '../store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        {routes.map(route => (
          <Route {...route}/>
        ))}
      </BrowserRouter>
    </Provider>
  )
}; 

ReactDom.hydrate(<App />, document.getElementById('root'));