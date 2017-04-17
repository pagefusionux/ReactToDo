const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({
  render: function () {
    const {todos} = this.props;

    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      } else {
        return todos.map((todo) => {
          return (
            <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/> // all attributes passed using spread operator (key attribute required here!)
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

module.exports = TodoList;
