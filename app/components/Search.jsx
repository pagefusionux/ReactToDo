const React = require('react');

const Search = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    const strTodo = this.refs.todo.value;

  },
  render: function () {
    return (
      <div>
        <form ref="form-search" onSubmit={this.handleSubmit} className="search-form">
          <input type="text" ref="todo" placeholder="Search todos" />
        </form>
      </div>
    );
  }
});

module.exports = Search;