import React, {Component} from 'react';

import helpers from './Components/utils/helpers';

class App extends Component {

	constructor(props) {
		super(props);
    //bind this to custom functions
		this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.newUser = this.newUser.bind(this);
    this.addMedication = this.addMedication.bind(this);
    this.deleteMedication = this.deleteMedication.bind(this);
		//set initial state
    this.state = {
      isAuth: false,
			user: {
        _id: '',
        username: '',
        medications: []
      }
		}
	}
  //the following functions are promise based, the logs are set for future development in handling errors
  newUser(username, password) {
    console.log('Signup Form Submission');

    helpers.newUser(username, password).then((res) => {
      console.log('back from signup helper');
      
      const user = {
        _id: res.data._id,
        username: res.data.username,
        medications: res.data.medications
      }
      this.setState({isAuth: true, user: user});
    }).catch(err=>{if(err)console.log(err)});

  }

	login(username, password) {
		console.log('Login Form Submission');
    	
  	helpers.loginUser(username, password).then((res) => {
  		console.log('back from login helper');
      const user = {
        _id: res.data._id,
        username: res.data.username,
        medications: res.data.medications
      }
      this.setState({isAuth: true, user: user});
  	}).catch(err=>{if(err)console.log(err)});
  }

  logout() {
    console.log('Logout User Clicked');
    helpers.logoutUser().then(()=>{
      this.setState({isAuth: false, user: {}});
    }).catch(err=>{if(err)console.log(err)});
  }

  addMedication(medication, id) {
    console.log('Add Medication Form Submission');
    helpers.addMeds(medication, id)
    .then(({data:{user}})=> this.setState({user}))
    .catch(err=>{if(err)console.log(err)});
  }

  deleteMedication(medication, id) {
    console.log('Delete Medication Called');
    helpers.deleteMeds(medication, id)
    .then(({data:{user}})=> this.setState({user}))
    .catch(err=>{if(err)console.log(err)});
  }

  render() {
    //clone element allows us to send props down one level to the children that will be rendered later
    let parentProps = {
      isAuth: this.state.isAuth,
      newUser: this.newUser, 
      login: this.login,
      logout: this.logout,
      addMedication: this.addMedication,
      deleteMedication: this.deleteMedication, 
      user: this.state.user
    }
   	return (
   		<div>{React.cloneElement(this.props.children, parentProps)}</div>
   	);
  }
}

export default App;