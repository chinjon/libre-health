import React, {Component} from 'react';

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
    	this.props.getMedList(this.medication);
    }

    render() {

    	return (

			<form onSubmit={this.handleSubmit} className="field has-addons has-addons-centered">
			    <p className="control">
			        <input className="input is-small" value={this.state.medication} onChange={this.onInputChange} type="text" name='medication' placeholder="Add medication"/>
			    </p>
			    <p className="control">
			        <button type='submit' className="button is-small"><i class="fa fa-search" aria-hidden="true"></i></button>
			    </p>
			</form>

		)
    }
}

export default MedsListSearchForm;