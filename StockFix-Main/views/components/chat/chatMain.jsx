var React = require('react');
var ReactDOM = require('react-dom');

/**
 * Main file for the chatroom front-end using React
 * TODO: Add Socket.io to server file
 **/

var Main = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Chat</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <Main />,
  document.getElementById('content')
);
