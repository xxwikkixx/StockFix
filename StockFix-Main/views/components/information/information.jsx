var React = require('react');
var ReactDOM = require('react-dom');

var Information = React.createClass({
  render: function(){
    return(
      <div class="container-fluid container-max">
        <div class="page-header">
          <h1>Information</h1>
        </div>
        <div class="page-header">
          <h3>information</h3>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Information />,
  document.getElementById('content');
);
