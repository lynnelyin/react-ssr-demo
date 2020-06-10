import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import routes from '../Routes';
import {renderRoutes} from 'react-router-config'
import {getClientStore} from '../store';
import {Provider} from 'react-redux';

const store = getClientStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  )
}; 

ReactDom.hydrate(<App />, document.getElementById('root'));