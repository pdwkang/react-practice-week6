var UserAgeInput = React.createClass({
	handleAgeChange: function(event){
		event.preventDefault();
		this.props.onChange(event.target.input.value)
		console.log('event:')
		console.log(event)
		console.log('target:')
		console.log(event.target)
		console.log('value:')
		console.log(event.target.value)		
	},
	render: function(){
		var userAge = this.props.userAge
		return(
			<form onSubmit={this.handleAgeChange}>
				<input placeholder='enter age'/>
				<button type='submit'>Submit</button>
			</form>
		)
	}
});

var YearBorn = React.createClass({
	render:function(){
		var yearBorn = this.props.yearBorn
		return(
			<div>{yearBorn}</div>
		)
	}
});

var CalculateYear = React.createClass({
	getInitialState:function(){
		return{
			userAge: 0
		}
	},
	handleUserAge:function(userAge){
		this.setState({
			userAge:userAge
		})
	},
	render: function(){
		var userAge = this.state.userAge;
		var yearBorn = (2017 - userAge) + ' or ' + (2016-userAge)
		return(
			<div>
				<UserAgeInput userAge={userAge} onChange={this.handleUserAge}/>
				<YearBorn yearBorn={yearBorn}/>
			</div>
		)
	}
});

ReactDOM.render(
	<CalculateYear />,
	document.getElementById('birth')
)