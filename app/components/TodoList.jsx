const React = require('react');
const {connect} = require('react-redux'); // connects to Provider
import Todo from 'Todo';
const TodoAPI = require('TodoAPI');

export const TodoList = React.createClass({
  render: function () {
    const {todos, showCompleted, searchText} = this.props;

    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      } else {
        return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
          return (
            <Todo key={todo.id} {...todo}/> // all attributes passed using spread operator (key attribute required here!)
          );
        });
      }
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state; // return all three properties
  }
)(TodoList); // connect to Provider to render itself

/*
module.exports = connect(
  (state) => {
    return {
      todos: state.todos // needed to access props from state
    };
  }
)(TodoList); // connect to Provider to render itself
*/
