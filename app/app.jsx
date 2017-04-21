/*
 * ReactToDo App
 */

// require react and react-dom
const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

// route/page aliases to be configured in webpack.config.js
import TodoApp from 'TodoApp';
const actions = require('actions');
const store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');
import Login from 'Login';

//import './../playground/firebase/index';

/*
store.subscribe(() => {
  let state = store.getState();
  console.log('New state:', state);

  TodoAPI.setTodos(state.todos); // set to localStorage
});
*/

// load in saved todos from localStorage
/*
const initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));
*/

// load in todos from Firebase, pass to store
store.dispatch(actions.startAddTodos());

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
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
