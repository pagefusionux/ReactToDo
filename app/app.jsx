/*
 * ReactToDo App
 */

// require react and react-dom
const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {hashHistory} = require('react-router');

// route/page aliases to be configured in webpack.config.js
const actions = require('actions');
const store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/'

// see if user is logged in or not, redirect accordingly
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos'); // redirect them to 'todos'
  } else {
    hashHistory.push('/'); // login page
  }
});

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
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
