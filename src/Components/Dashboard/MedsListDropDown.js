import React, {Component} from 'react';
import Radium from 'radium';

let styles = {
  base: {
  	overflow: 'auto',
  	'text-overflow': 'ellipsis',
    'max-width': '200px',
  }
}

class MedsListDropDown extends Component {

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			value: 'select'
		}
	}

    handleChange(event) {
    	console.log(event);
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
    		<select value={this.state.value} onChange={this.handleChange}>
    			<option value='select' styles={styles.base}>Select From DropDown</option>
    			{this.props.medsList.map((med, i)=><option key={i} value={i} styles={styles.base}>{med.name}</option>)}
    		</select>
    	)
    	
    }

    render() {

    	return (

        	<form onSubmit={this.handleSubmit} className="field has-addons has-addons-centered" >
			    <p className="control">
				    <span className="select is-small">
	      				
				        {this.renderMedsList()}
				   
			        </span>
			    </p>
			    <p className="control">
			        <button type='submit' className="button is-small">Add</button>
			    </p>
			</form>

		)
    }
}

export default Radium(MedsListDropDown);