const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export const AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    const {dispatch} = this.props;
    const todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = ''; // clear out value
      //this.props.onAddTodo(todoText);
      dispatch(actions.addTodo(todoText));
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

export default connect()(AddTodo);

//module.exports = connect()(AddTodo);
