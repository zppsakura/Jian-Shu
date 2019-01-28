import React, { Component, Fragment } from 'react';
import Index from './common/header/index'
import { Provider } from 'react-redux'
import store from './store/index.js'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index.js';
import Detail from './pages/detail/index.js';
import Login from './pages/login/index.js';
import Article from './pages/article/index.js';

class App extends Component {
  
  render() {
    return (
      <Fragment>
        <Provider store = {store}>
         
          <BrowserRouter>
            <div>
              <Index />
              <Route path="/" exact component={ Home } />
              <Route path="/detail/:id" exact component={ Detail } />
              <Route path="/login" exact component={ Login } />
              <Route path="/article" exact component={ Article } />
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}


export default App;
