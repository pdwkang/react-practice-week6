var TotalBillInput = React.createClass({
	handleChange: function(event){
		this.props.onChange(event.target.value)

	},
	render: function(){
		var totalBill = this.props.totalBill;
		return(
			<div>
				<label>Enter total bill amount </label>
				<input placeholder='0' value={totalBill} onChange={this.handleChange} />
				<p>Your total bill is {totalBill}</p>
			</div>
		)
	}
});

var PaidBillInput = React.createClass({
	handleChange: function(event){
		this.props.onChange(event.target.value)
	},
	render: function(){
		var paidBill = this.props.paidBill;
		return(
			<div>
				<label>Enter paid bill amount </label>
				<input placeholder='0' value={paidBill} onChange={this.handleChange} />
				<p>You paid {paidBill}</p>

			</div>
		)
	}
});

function PrintReturn(props){
	var returnAmount = props.returnBill;
	return(
		<div>Your return amount is {returnAmount}</div>
	)
}
var Bill = React.createClass({
	getInitialState: function(){
		return{
			totalBill: 0,
			paidBill: 0
		}
	},
	handleTotalBill: function(totalBill){
		this.setState({
			totalBill: totalBill
		})
	},
	handlePaidBill: function(paidBill){
		this.setState({
			paidBill: paidBill
		})
	},
	render: function(){
		var totalBill = this.state.totalBill;
		var paidBill = this.state.paidBill;
		var returnBill = paidBill - totalBill;
		if(returnBill<=0){returnBill=0};
		return(
			<div>
				<TotalBillInput totalBill={totalBill} onChange={this.handleTotalBill} />
				<PaidBillInput paidBill={paidBill}  onChange={this.handlePaidBill} />
				<PrintReturn returnBill={returnBill} />
			</div>
		)
	}
})

ReactDOM.render(
	<Bill />,
	document.getElementById('bills')
)