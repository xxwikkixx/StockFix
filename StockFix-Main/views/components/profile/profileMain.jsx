var React = require('react');
var ReactDOM = require('react-dom');
var ProfileForms = require('./profileForms.jsx');
var ProfilePassword = require('./profilePassword.jsx');

//TODO: Need to figure out how this information is getting sent from the server 
var Profile = React.createClass({
  render:function(){
    return(
      <div className='container-fluid container-max'>
        <div className='page-header'>
          <h1>Profile</h1>
        </div>
        <ProfileForms />
        <ProfilePassword />
      </div>
    );
  }
});

ReactDOM.render(
  <Profile />,
  document.getElementById('content')
);
