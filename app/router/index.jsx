import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'todoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

// middleware function for redirecting to '/' if not logged in
const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) { // if NOT logged in
    replace('/'); // redirect to '/'
  }
  next();
};

// middleware function for redirecting to todos (if logged in)
const redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) { // if logged in
    replace('/todos'); // redirect to '/todos'
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
