import React, {Component} from 'react';


class MedsListDeleteButton extends Component {

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			medication: {}
		}
	}

	handleSubmit(event){
	    event.preventDefault();
	    this.props.deleteMedication(this.state.medication, this.props.userId);
	}

	componentWillMount(){
		this.setState({medication: this.props.medication});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			  <input type='hidden' name='medication' value={this.state.medication}/>
			  <button type='submit' className="button is-danger is-outlined">
			      <span className="icon is-small">
			          <i className="fa fa-times"></i>
			      </span>
			  </button>
			</form>
		)
	}
}

export default MedsListDeleteButton;