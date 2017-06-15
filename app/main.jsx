'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import  ScrollToTop from './components/scrollToTop'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store'
import Root from './components/Root'
import homeContainer from './containers/homeContainer';

render (
  <Provider store={store}>
    <Router>
    <div>
    <ScrollToTop >
      <Route component={Root} />
      <Switch>
      <Route exact path ="/" component={homeContainer} />
      </Switch>
     </ScrollToTop>
    </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)