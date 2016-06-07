var React = require('react');

module.exports = React.createClass({
  render: function(){
    return(
      <div>
        <div class="page-header">
          <h3>Delete Account</h3>
        </div>
        <form action="/user/delete" method="POST" class="form-horizontal">
          <div class="form-group">
            <div class="col-sm-offset-3 col-sm-4">
              <button type="submit" class="btn btn-danger">Delete Account</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
});
