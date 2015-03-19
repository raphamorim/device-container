var Device = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },
  
  render: function() {
  	return (
  		<div className="Device">
  			{this.props.children}
  		</div>
  	)
  }
});
