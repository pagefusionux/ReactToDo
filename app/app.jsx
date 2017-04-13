/*
 * ReactToDo App
 */

// require react and react-dom
const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

// route/page aliases to be configured in webpack.config.js
const TodoApp = require('TodoApp');
const Page1 = require('Page1');
const Page2 = require('Page2');

// load Foundation (using style and css loaders)
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

// router implementation
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={TodoApp}>
      <Route path="page1" component={Page1}/>
      <Route path="page2" component={Page2}/>
      <IndexRoute component={Page1}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
