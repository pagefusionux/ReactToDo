const React = require('react');
const TodoSearch = require('TodoSearch');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const uuid = require('node-uuid');

const TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog.'
        }, {
          id: uuid(),
          text: 'Clean the yard.'
        }, {
          id: uuid(),
          text: 'Ignore wife.'
        }, {
          id: uuid(),
          text: 'Neglect child.'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    this.setState({ // update todos array adding a new item (object) on the end of the array
      todos: [
        ...this.state.todos, // what it as before
        {
          id: uuid(), // generate random ID
          text: text,
        }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    const {todos} = this.state;

    return (
      <div>
        <div className="row">
          <div className="small-centered medium-6 large-4 columns">
            <h2 className="title">Todo App</h2>
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
