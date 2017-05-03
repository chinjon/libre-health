import React, {Component} from 'react';
import Radium from 'radium';

const styles = {
  base: {
  	overflow: 'auto',
  	textOverflow: 'ellipsis',
    width: '210px',
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
    	//value will be an index of the props.medlist array
        this.setState({value: event.target.value});
    }

    handleSubmit(e) {
    	e.preventDefault();
    	//only call the function when an actual item is selected
    	if(this.state.value !== 'select'){
    		this.props.addMedication(this.props.medsList[this.state.value], this.props.userId);
    	}
    }

    renderMedsList(){
    	return (
    		<select value={this.state.value} onChange={this.handleChange} style={styles.base}>
    			<option value='select'>Select From DropDown</option>
    			{this.props.medsList.map((med, i)=><option key={i} value={i}>{med.name}</option>)}
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