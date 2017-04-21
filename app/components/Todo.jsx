const React = require('react');
const {connect} = require('react-redux'); // connects to Provider
const moment = require('moment');
const actions = require('actions'); // dispatch actions

export const Todo = React.createClass({
  render: function () {
    const {id, text, completed, createdAt, completedAt, dispatch} = this.props; // integrated connect() below
    const todoClassName = completed ? 'todo todo-completed' : 'todo';


    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
        //this.props.onToggle(id);
        dispatch(actions.startToggleTodo(id, !completed)); // dispatch action (from actions module)
      }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect()(Todo);

//module.exports = connect()(Todo); // didn't need to grab anything from the state
