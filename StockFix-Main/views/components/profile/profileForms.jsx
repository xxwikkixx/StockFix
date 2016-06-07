var React = require('react');

module.exports = React.createClass({
  render: function(){
    return(
      <form action="/user" method="POST" className="form-horizontal">
        <div className="form-group">
          <label for="email" className="col-sm-3 control-label">Email</label>
          <div className="col-sm-4">
            <input type="email" name="email" id="email" value="{{user.email}}" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label for="name" className="col-sm-3 control-label">Name</label>
          <div className="col-sm-4">
            <input type="text" name="name" id="name" value="{{user.profile.name}}" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label for="name" className="col-sm-3 control-label">Customer ID</label>
          <div className="col-sm-4">
            <div className="form-control-static">
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for="name" className="col-sm-3 control-label">Plan</label>
          <div className="col-sm-4">
            <p className="form-control-static">

            </p>
          </div>
        </div>
        <div className="form-group">
          <label for="name" className="col-sm-3 control-label">Last 4</label>
          <div className="col-sm-4">
            <p className="form-control-static">

            </p>
          </div>
        </div>
        <div className="form-group">
          <label for="gender" className="col-sm-3 control-label">Gender</label>
          <div className="col-sm-4">
            <div className="radio">
              <label>
                <input type="radio" name="gender" value="male" data-toggle="radio" />
                <span>Male</span>
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="gender" value="female" data-toggle="radio" />
                <span>Female</span>
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for="location" className="col-sm-3 control-label">Location</label>
          <div className="col-sm-4">
            <input type="text" name="location" id="location" value="{{user.profile.location}}" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label for="website" className="col-sm-3 control-label">Website</label>
          <div className="col-sm-4">
            <input type="text" name="website" id="website" value="{{user.profile.website}}" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label for="gravatar" className="col-sm-3 control-label">Gravatar</label>
          <div className="col-sm-4">
            <img src="{{user.gravatar()}}" width="100" height="100" className="profile" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-4">
            <button type="submit" className="btn btn-primary" >
              <span className="ion-edit"></span>
              Update Profile
            </button>
          </div>
        </div>
      </form>
    );
  }
});
