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
    helpers.newUser(this.state.username, this.state.password).then((data) => {
      // do log in magic
      console.log(`in Navigation component ${data}`);
    })
  }

  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            New User Sign Up
          </p>
        </header>
        <div className="card-content">
          <form onSubmit={this.submitForm.bind(this)}>
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
                <button className="button is-danger" onClick={this.handleCloseModal}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUpForm;
