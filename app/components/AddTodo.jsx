const React = require('react');

const AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    const todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = ''; // clear out value
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus(); // nice UX thing
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit} className="addtodo-form">
          <input type="text" ref="todoText" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
