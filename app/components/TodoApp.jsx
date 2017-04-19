const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

//const TodoList = require('TodoList');
//const AddTodo = require('AddTodo');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
const TodoAPI = require('TodoAPI');

const TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function() { // fired after state (or props) change
    TodoAPI.setTodos(this.state.todos);
  },
  handleToggle: function (id) {
    // loop through all todos (find id, change stuff)
    const updatedTodos = this.state.todos.map((todo) => {

      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
        //console.log('completed at: ', todo.completedAt);
      }

      return todo;
    });

    this.setState({
      todos: updatedTodos
    });

  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    const {todos, showCompleted, searchText} = this.state;

    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="small-centered small-11 medium-6 large-5 columns">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList/> {/* no properties needed because of redux Provider */}
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
