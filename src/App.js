import React, {Component} from 'react';

import helpers from './Components/utils/helpers';

class App extends Component {

	constructor(props) {
		super(props);
    //bind this to custom functions
		this.login = this.login.bind(this);
    this.newUser = this.newUser.bind(this);
		//set initial state
    this.state = {
      isAuth: false,
			_id: '',
			username: '',
			medications: []
		}
	}

  newUser(username, password) {
    console.log('Signup Form Submission');

    helpers.newUser(username, password).then((data) => {
      console.log('back from signup helper');

      this.setState({isAuth: true, _id: data.id, username: data.username, medications: data.medications});
    });

  }

	login(username, password) {
		console.log('Login Form Submission');
    	
  	helpers.loginUser(username, password).then((data) => {
    		console.log('back from login helper');

        this.setState({isAuth: true, _id: data.id, username: data.username, medications: data.medications});
  	});
    	
  }

  render() {
    //clone element allows us to send props down one level to the children that will be rendered later
    let parentProps = {
      isAuth: this.isAuth,
      newUser: this.newUser, 
      login: this.login, 
      _id: this.state._id, 
      username: this.state.username, 
      medications: this.state.medications
    }
   	return (
   		<div>{React.cloneElement(this.props.children, parentProps)}</div>
   	);
  }
}

export default App;

