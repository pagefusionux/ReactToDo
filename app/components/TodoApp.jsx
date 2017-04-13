const React = require('react');

const TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <div className="row">
          <div className="small-centered medium-6 large-4 columns">
            {this.props.children} {/* handled by react-router; see /app.jsx for setup */}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;