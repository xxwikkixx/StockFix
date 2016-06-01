var React = require('react');

var title;
var body;

module.exports = React.createClass({
	render:function(){
		if(this.props.isActive==true){
			title = this.props.planType;
			body = <div className='panel-body'><p>Thank you for subscribing to this plan!</p></div>;
		} else {
			title = <div>{this.props.planType} <a href='/billing'> (Change to this plan) </a></div>;
			body = <div></div>;
		}
		return(
			<div className='panel panel-default'>
				<div className='panel-heading'>
					{title}
				</div>
					{body}
				</div>
		);
	}
});
