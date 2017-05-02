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
			user: {
        _id: 'f4k3#45#',
        name: 'Johnny Q. Public',
        medications: [{
          name: 'Prednisone',
          rxcui: '1303137'
        }, {
          name: 'Sudafed',
          rxcui: '1049529'
        }, {
          name: 'Cymbalta',
          rxcui: '596932'
        }, {
          name: 'Oxycodone',
          rxcui: '1049601'
        }]
      }
		}
	}

  newUser(username, password) {
    console.log('Signup Form Submission');

    helpers.newUser(username, password).then((data) => {
      console.log('back from signup helper');

      const user = {
        _id: data.id,
        username: data.username,
        medications: data.medications
      }

      this.setState({isAuth: true, user: user});
    }).catch(err=>{if(err)console.log(err)});

  }

	login(username, password) {
		console.log('Login Form Submission');
    	
  	helpers.loginUser(username, password).then((data) => {
  		console.log('back from login helper');

      const user = {
        _id: data.id,
        username: data.username,
        medications: data.medications
      }
      this.setState({isAuth: true, user: user});
  	}).catch(err=>{if(err)console.log(err)});
    	
  }

  addMedication(name, id) {
    console.log('Add Medication Form Submission');
    helpers.addMeds(name, id).then(data=>{
      const user = {
        _id: data.id,
        username: data.username,
        medications: data.medications
      }
      this.setState({user: user});
    }).catch(err=>{if(err)console.log(err)});
  }

  render() {
    //clone element allows us to send props down one level to the children that will be rendered later
    let parentProps = {
      isAuth: this.state.isAuth,
      newUser: this.newUser, 
      login: this.login,
      addMedication: this.addMedication, 
      user: this.state.user
    }
   	return (
   		<div>{React.cloneElement(this.props.children, parentProps)}</div>
   	);
  }
}

export default App;

