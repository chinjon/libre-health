import React, {Component} from 'react';

import helpers from './Components/utils/helpers';

class App extends Component {

	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			_id: '',
			username: '',
			medications: []
		}
	}

	submitForm(username, password) {
		console.log(username, password);
    	
    	helpers.loginUser(username, password).then((data) => {
      		// do log in magic
      		console.log('back from login');
      		console.log(data);

      		//this can be simplified
      		const _id = data._id;
      		const username = data.username;
      		const medications = data.medications;
      		this.setState({_id, username, medications});
    	});
    	
  	}

  	render() {
    	return (
    		<div>{React.cloneElement(this.props.children, {submitForm: this.submitForm,
    		 												_id: this.state._id, 
    		 												username: this.state.username, 
    		 												medications: this.state.medications})}
    		</div>
    	);
  	}
}

export default App;
