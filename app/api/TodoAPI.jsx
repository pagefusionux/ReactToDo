const $ = require('jQuery');

module.exports = {
  /*
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos)); // localStorage just stores strings
      return todos; // specify valid return
    }
  },
  getTodos: function() {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      console.log('JSON.parse failed.');
    }

    return $.isArray(todos) ? todos : [];
  },
  */
  filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      const todoText = todo.text.toLowerCase(); // we're sending this in as lowercase from TodoApp.jsx

      // true? (keep item)
      // false? (remove item)
      return searchText.length === 0 || todoText.indexOf(searchText) > -1;
    });

    // sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      // return -1; // a should come before b
      // return 1; // b should come before a
      // return 0; // no change (a === b)

      // conditions
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) { // opposite of first
        return 1;
      } else {
        return 0; // no reason to sort
      }
    });


    return filteredTodos;
  }
};
