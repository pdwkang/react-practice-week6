function Name(props){
	return(
		<p>{props.textToDisplay}</p>
	)
}


var MyForm = React.createClass({
	getInitialState: function(){
		return{
			value: 'Test'
		}
	},

	handleChange: function(event){
		this.setState({
			value: event.target.value
		})
	},

	render: function(){
		return(
			<form>
				<label>Name:</label>
				{/* Add an onchange handler to our input box */}
				<input type="text" placeholder="Enter your name" onChange={this.handleChange} />
				{/* Pass our Name component this.state.value */}
				<Name textToDisplay = {this.state.value} />
			</form>
		)
	}
})


ReactDOM.render(
	<MyForm />,
	document.getElementById('form-container')
)