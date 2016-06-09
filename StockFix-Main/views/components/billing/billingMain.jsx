var React = require('react');
var ReactDOM = require('react-dom');

var Billing = React.createClass({
  render: function(){
    return(
      <div className='container-fluid container-max'>
        <div className='page-header'>
          <h1>Billing</h1>
        </div>
        <div className='page-header'>
          <h3>Subscription</h3>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Billing />,
  document.getElementById('content')
);
