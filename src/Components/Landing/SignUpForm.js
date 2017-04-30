import React, {Component} from 'react';

class SignUpForm extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            New User Sign Up
          </p>
        </header>
        <div className="card-content">
          <div>
            <div className="field">
              <label className="label">Name</label>
              <p className="control">
                <input className="input" type="text" placeholder="Text input"/>
              </p>
            </div>
            <div className="field">
            <label className="label">Password</label>
              <p className="control has-icons-left">
                <input className="input" type="password" placeholder="Password"/>
              </p>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a className="card-footer-item">Submit</a>
          <a className="card-footer-item">Cancel</a>
        </footer>
      </div>
    )
  }
}

export default SignUpForm;
