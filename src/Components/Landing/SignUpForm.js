import React, {Component} from 'react';

import helpers from './../utils/helpers';

class SignUpForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    //check to see if this.props.isAuth is false, display some sort of error???
    if (nextProps.isAuth) {
      this.setState({username: '', password: ''});
      this.props.closeModal();
    }
  }

  onInputChange = event =>{
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
    event.preventDefault();
  }

  submitForm(event) {
    event.preventDefault();
    this.props.newUser(this.state.username, this.state.password);

  }


  render() {
    // console.log(this.props);
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            New User Sign Up
          </p>
        </header>
        <div className="card-content">
          <form onSubmit={this.submitForm}>
            <div className="field">
              <label className="label">Name</label>
              <p className="control">
                <input 
                  className="input" 
                  type="text" 
                  placeholder="Text input"
                  name="username"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <p className="control has-icons-left">
                <input 
                  className="input" 
                  type="password" 
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
             <div className="columns has-text-centered">
              <div className="column">
                <button type="submit" className="button is-info">Submit</button>
              </div>
              <div className="column">
              {this.props.children}
                {/*<button className="button is-danger" onClick={this.handleCloseModal}>Cancel</button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUpForm;
