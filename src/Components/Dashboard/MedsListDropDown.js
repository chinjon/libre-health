import React, {Component} from 'react';
import Radium from 'radium';

const styles = {
  base: {
    width: '100%',
  },
  button: {
  	width: '40px',
  	textAlign: 'center'
  }
}

class MedsListDropDown extends Component {

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			value: 'select',
			button: <i className="fa fa-plus"></i>
		}
	}

    handleChange(event) {
    	//value will be an index of the props.medlist array
    		if (event.target.value == 'back') {
    			this.setState({value: event.target.value, button: <i className="fa fa-reply"></i>});
    		} else {
    			this.setState({value: event.target.value, button: <i className="fa fa-plus"></i>});
    		}
        
    }

    handleSubmit(e) {
    	e.preventDefault();
    	//only call the function when an actual item is selected
    	if(this.state.value >=0){
    		this.props.addMedication(this.props.medsList[this.state.value], this.props.userId);
    	} else if(this.state.value='back'){
    		this.props.userReturn();
    	}
    }

    renderMedsList(){
    	return (
    		<select value={this.state.value} onChange={this.handleChange}>
    			<option value='select' className='is-unselectable'>Select From DropDown</option>
    			<option value='back'>Go Back To Search<br/></option>
    			{this.props.medsList.map((med, i)=><option key={i} value={i}>{med.name}</option>)}
    		</select>
    	)
    	
    }

    render() {

    	return (
    		<div className="panel-block">
	    		<p className='control'>
	        	<form onSubmit={this.handleSubmit} className="field has-addons has-addons-centered is-fullwidth" >
				    <p className="control">
					    <span className="select">
		      				
					        {this.renderMedsList()}
					   
				        </span>
				    </p>
				    <p className="control">
				        <button type='submit' className="button" style={styles.button}>{this.state.button}</button>
				    </p>
						</form>
					</p>
				</div>
			)
    }
}

export default Radium(MedsListDropDown);