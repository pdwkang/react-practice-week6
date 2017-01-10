
// props are sent (up or down), state is set
// Two utility functions to conert c->f, and f->c
function toCelcius(f){
	return ((f-32)*5/9);
}

function toFahrenheit(c){
	return ((c*9/5)+32)
}

// Make another utility function that tries the conversion.
// if it can, it returns the conversion rounded.
// if it can't, it returns an empty string
function tryConvert(value, tUnit){
	var tryNumber = Number(value);
	if(isNaN(tryNumber)){
		// this is not a valid number we can work with 
		return '';
	}else{
		// this is a valid number (isNaN returned false). we can convert
		if(tUnit ==="c"){
			var convertedNumber = toFahrenheit(tryNumber);
		}else{
			var convertedNumber = toCelcius(tryNumber);
		}
	}
	return convertedNumber;
}
// console.log(tryConvert(100, 'f'));
// console.log(tryConvert(0, 'c'));
function BoilingVerdict(props){
	if(props.celcius>=100){
		return(
			<p>The water would boil at {props.celcius} temperature</p>
		)
	}else{
		return(
			<p>The water would NOT boil at {props.celcius} temperature</p>	
		)
	}
}

var TemperatureInput = React.createClass({
	handleChange: function(event){
		this.props.onChange(event.target.value) //is onChange ---> handleCelcisChange()
		// onChange() is an entire function : handleCelciusChange(). inside calc-render
	},
	render:function(){
		var value = this.props.value;
		var tUnits = this.props.tUnits;
		//console.log(value); //<--- that returned 'undefined'?// now it will return whever we pass into it
		return(
			<div>
				<label>Enter temperature in question in {tUnits}</label>
				<input placeholder="Temp" value={value} onChange={this.handleChange} />
			</div> 
		)
	}
})

var Calculator = React.createClass({
	getInitialState: function(){
		return{
			value: 32,
			scale:'c'	
		}
	},
	handleCelciusChange: function(value){ 
		this.setState({
			scale: 'c',
			value: value
		})
	},
	handleFahrenheitChange: function(value){ 
		this.setState({
			scale: 'f',
			value: value
		})
	},
	render: function(){
		var scale = this.state.scale;
		var value = this.state.value;
		if(this.state.scale==='c'){
			var fTemp = tryConvert(value, 'c');
			var cTemp = value;
		}else if(this.state.scale =='f'){
			var fTemp = value;
			var cTemp = tryConvert(value, 'f');
		};
		return(
			<div>
				<TemperatureInput tUnits='Celcius' value={cTemp} onChange={this.handleCelciusChange} />
				<TemperatureInput tUnits='Fahrenheit' value={fTemp} onChange={this.handleFahrenheitChange} />
				<BoilingVerdict celcius={cTemp} />
			</div>
		)
	}
})

ReactDOM.render(
	<Calculator/>,
	document.getElementById('boiling')
)



//with anonymous functions, you an use: () => {}

//if you do something other than a number, it displays NaN, lol
//i guess normally, we would do a conditional to check beforehand, not in the onChange={}


//		var userEnteredTemp = this.state.value;
//we could do  // var userEnteredTemp = Number(this.state.value) 
// and delete line 23. yeah, but replace it this: var userEnteredTemp = Number(this.state.value)












