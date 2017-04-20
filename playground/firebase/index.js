import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDh2XxSY8tE2yPcSIhEdET_ve9gDCzFGL4",
  authDomain: "todoapp-5f148.firebaseapp.com",
  databaseURL: "https://todoapp-5f148.firebaseio.com",
  projectId: "todoapp-5f148",
  storageBucket: "todoapp-5f148.appspot.com",
  messagingSenderId: "825264400759"
};
firebase.initializeApp(config);

// get reference to DB
const firebaseRef = firebase.database().ref();


/*******************************************************************************
 * CREATE
 *
 * */

// set (wipes, then sets)
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0',
  },
  isRunning: true,
  user: {
    name: 'Chris',
    age: 40
  },
  todos: {
    '123abc': { // For arrays, Firebase uses the id value as key for use as a reference
      text: 'Film some vids.'
    }
  }
}).then(() => {
  console.log('Set worked!');
}, (e) => {
  console.log('Set failed!', e);
});

/* Firebase sets arrays like objects (and uses the IDs as references) */

/*
* creating and pushing onto a new array (an object, really)
* */
const todosRef = firebaseRef.child('todos'); // create new reference from 'todos' object (so we can push onto it)

const newTodosRef = todosRef.push({ // creates new ID as object name, shortcut of .push.set()
  text: 'Walk the dog.'
});

console.log('New Todo ID:', newTodosRef.key); // get the ID (used as object name) of the new todo

/*
* setting 'on' listeners onto arrays (an object, really)
* */

// child_added: fire when we add a new index onto array
todosRef.on('child_added', (snapshot) => {
  console.log('child_added:', snapshot.key, snapshot.val());
});

// child_changed: fire when we change an index in the array (change value in Firebase UI to see devTools update)
todosRef.on('child_changed', (snapshot) => {
  console.log('child_changed:', snapshot.key, snapshot.val());
});

newTodosRef.update({text: 'Neglect wife.'}); // update text of new todo

// child_removed: fire when we remove an index from the array (remove key in Firebase UI to see devTools update)
todosRef.on('child_removed', (snapshot) => {
  console.log('child_removed:', snapshot.key, snapshot.val());
});

newTodosRef.remove(); // remove new todo

/*******************************************************************************
 * READ
 * */

/*
// fetch, once
firebaseRef.once('value').then((snapshot) => {
  console.log('Fetch entire database:', snapshot.val());
}, (e) => {
  console.log('Fetch failed!', e);
});

// fetch, once using .child()
firebaseRef.child('app').once('value').then((snapshot) => {
  console.log('Fetch app object:', snapshot.key, snapshot.val());
}, (e) => {
  console.log('Fetch failed!', e);
});
*/

/*
 * Setting 'on' listener for changes.
 * */

/*
// fetch, on (listen for changes)
firebaseRef.on('value', (snapshot) => {
  console.log('Got value', snapshot.val());
});

// trigger listener set above
firebaseRef.update({
  isRunning: false
});
*/

/*
// fetch, on (listen for changes on child)
firebaseRef.child('app').on('value', (snapshot) => {
  console.log('Got value', snapshot.val());
});

// trigger listener set above for child (using muilti-path)
firebaseRef.update({
  'app/name': 'My Todo App'
});

// turn off ALL event listeners for 'firebaseRef'
firebaseRef.off();
*/

/*
* If we turn the 'on' callback into a variable, and pass
* it into both 'on' and 'off', we just remove ONE
* listener from the firebaseRef.
* */

/*
const logData = (snapshot) => {
  console.log('Got value', snapshot.val());
};

firebaseRef.on('value', logData);

firebaseRef.off(); // other listeners added to 'firebaseRef' are not removed

firebaseRef.update({isRunning: false});
*/

firebaseRef.child('user').on('value', (snapshot) => { // listen to changes on 'user'
  console.log('Got value:', snapshot.val());
});

firebaseRef.update({ // triggers listener on 'user'
  'user/name': 'Markus'
});

firebaseRef.update({ // does NOT trigger listener on 'user' (because we're updating 'app')
  'app/name': 'Lame Todo App'
});


/*******************************************************************************
* UPDATE
* */

/*
// update (first-level property only)
firebaseRef.update({
  isRunning: false
});

// update using multi-path (key/path: value)
firebaseRef.update({
  'app/name':'Todo Application'
});

// update using .child()
firebaseRef.child('app').update({
  name: 'Todo Application'
}).then(() => {
  console.log('Update worked!');
}, (e) => {
  console.log('Update failed!', e);
});
*/


/*******************************************************************************
* DELETE
* */

/*
// remove everything
firebaseRef.remove();

// remove using .child()
firebaseRef.child('app').remove();

// remove using multi-path
firebaseRef.child('app/name').remove();

// remove by setting value to null
firebaseRef.child('app').update({
  version: '2.0',
  name: null
});
*/
