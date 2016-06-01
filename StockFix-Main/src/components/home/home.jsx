var React = require('react');
var ReactDOM = require('react-dom');
var Plans = require('./plans.jsx');


var Home = React.createClass({
	render:function(){
		return(
			<div className='container-fluid container-max'>
				<div className='page-header'>
					<h1>Home</h1>
				</div>
				<Plans planType={'Free Plan'} isActive={true} />
				<Plans planType={'Silver Plan'} isActive={false} />
				<Plans planType={'Gold Plan'} isActive={false} />
				<Plans planType={'Platinum Plan'} isActive={false} />
			</div>
		);
	}
});

ReactDOM.render(
	<Home />,
	document.getElementById('content')
);
