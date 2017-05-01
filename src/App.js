import React, {Component} from 'react';

import helpers from './Components/utils/helpers';

class App extends Component {

	constructor(props) {
		super(props);
		this.submitLoginForm = this.submitLoginForm.bind(this);
    this.submitSignupForm = this.submitSignupForm.bind(this);
		this.state = {
			_id: '',
			username: '',
			medications: []
		}
	}

  submitSignupForm(username, password) {
    console.log('Signup Form Submission');

    helpers.signupUser(username, password).then((data) => {
      // do log in magic
      console.log('back from signup helper');
      console.log(data);

      //this can be simplified
      const _id = data._id;
      const username = data.username;
      const medications = data.medications;
      this.setState({_id, username, medications});
    });

  }

	submitLoginForm(username, password) {
		console.log('Login Form Submission');
    	
    	helpers.loginUser(username, password).then((data) => {
      		// do log in magic
      		console.log('back from login helper');
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
    		<div>{React.cloneElement(this.props.children, {submitLoginForm: this.submitLoginForm,
              submitSignupForm: this.submitSignupForm,
    		 			_id: this.state._id,
              username: this.state.username, 
    		 			medications: this.state.medications})}
    		</div>
    	);
  	}
}

export default App;
