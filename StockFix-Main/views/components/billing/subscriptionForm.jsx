var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
      <div>
        <form action='/user/plan' method='POST' className='form-horizontal'>
          <div className='form-group'>
            <label for='plan' className='col-sm-3 control-label'>Plan</label>
            <div className='col-sm-4'>
              
            </div>
          </div>
        </form>
      </div>
    );
  }
});
