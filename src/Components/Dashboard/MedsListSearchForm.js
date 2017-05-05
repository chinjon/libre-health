import React, {Component} from 'react';
import Radium from 'radium';

const styles = {
  base: {
    width: '100%'
  }
}

class MedsListSearchForm extends Component {

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			medication: ''
		}
	}

    onInputChange = event =>
    {
        const target = event.target;
        const name = target.name;
        this.setState({
          [name]: target.value
        });
        event.preventDefault();
    }

    handleSubmit(e) {
    	e.preventDefault();
    	this.props.getMedsList(this.state.medication);
    }

    render() {

    	return (
    		<div className="panel-block">
				<form onSubmit={this.handleSubmit} style={styles.base}>
                    <div className="field is-grouped">
    				    <p className="control is-expanded">
    				        <input className="input" value={this.state.medication} onChange={this.onInputChange} type="text" name='medication' placeholder="Search Medications..."/>
    				    </p>
    				    <p className="control">
    				        <button type='submit' className="button"><i className="fa fa-search" aria-hidden="true"></i></button>
    				    </p>
                    </div>
				</form>
			</div>
		)
    }
}

export default Radium(MedsListSearchForm);