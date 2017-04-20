/*
 * ReactToDo App
 */

// require react and react-dom
const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

// route/page aliases to be configured in webpack.config.js
const TodoApp = require('TodoApp');
const actions = require('actions');
const store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');

//import './../playground/firebase/index';

store.subscribe(() => {
  let state = store.getState();
  console.log('New state:', state);

  TodoAPI.setTodos(state.todos);
});

// load in saved todos
const initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// dispatch actions (defaults)
//store.dispatch(actions.addTodo('Clean the yard.'));
//store.dispatch(actions.setSearchText('yard'));
//store.dispatch(actions.toggleShowCompleted());

// load Foundation (using style and css loaders)
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

// router implementation
ReactDOM.render(
  /*
  <Router history={hashHistory}>
    <Route path="/" component={TodoApp}>

    </Route>
  </Router>,
  */
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
