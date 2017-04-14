const React = require('react');
const TodoSearch = require('TodoSearch');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');

const TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog.'
        }, {
          id: 2,
          text: 'Clean the yard.'
        }, {
          id: 3,
          text: 'Ignore wife.'
        }, {
          id: 4,
          text: 'Neglect child.'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    console.log('new todo: ' + text);
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
