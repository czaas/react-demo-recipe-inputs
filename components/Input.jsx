var InputField = React.createClass({
	render: function(){
		return(
			<input type="text" name={this.props.name} placeholder={this.props.children}/>
		)
	}
});