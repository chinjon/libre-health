import React, {Component} from 'react';

class MedsListDropDown extends Component {

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderMedsList = this.renderMedsList.bind(this);
		this.state = {
			value: 'select'
		}
	}

    onInputChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(e) {
    	e.preventDefault();
    	if(this.state.value !== 'select'){
    		this.props.addMedication(this.props.medsList[this.state.value]);
    	}
    }

    renderMedsList(){
    	return (
    		<select value={this.state.value} onChange={this.onInputChange}>
    			<option value='select'>Select From DropDown</option>
    			{this.props.medsList.map((med, i)=>
    				<option key={i} value={i}>{med.name}</option>
    			)}
    		</select>
    	)
    	
    }

    render() {

    	return (

        	<form onSubmit={this.handleSubmit} className="field has-addons has-addons-centered">
			    <p className="control">
				    <span className="select is-small">
	      				
				        {this.renderMedsList}
				   
			        </span>
			    </p>
			    <p className="control">
			        <button type='submit' className="button is-small">Add</button>
			    </p>
			</form>

		)
    }
}

export default MedsListDropDown;