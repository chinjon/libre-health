import React, {Component} from 'react';
import SignUpForm from './Landing/SignUp'
import helpers from './utils/helpers';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onInputChange = event => {
    const target = event.target;
    const name = target.name;
    this.setState({[name]: target.value});

    event.preventDefault();
  }

  submitForm(event) {
    event.preventDefault();
    console.log(this.props.submitForm);
    this.props.submitLoginForm(this.state.username, this.state.password);
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item">
            <img src="./assets/img/logo/logo.png" alt="logo"/>
          </a>
        </div>
        <form onSubmit={this.submitForm} className="nav-center nav-menu">
          <div className="nav-item">
            <input className="input" type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onInputChange}/>
          </div>
          <div className="nav-item">
            <input className="input" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onInputChange}/>
          </div>
          <div className="nav-item">
            <button className="button is-info" type="submit">Log In</button>
          </div>
        </form>

        <div className="nav-right nav-menu">
          <div className="nav-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="button is-primary">
                  <span className="icon">
                    <i className="fa fa-sign-out"></i>
                  </span>
                  <span>Logout</span>
                </a>
              </p>
              <SignUpForm signupForm={this.props.submitSignupForm}/>
            </div>
            <div className="nav-item">
              {this.props.children}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation;

// Theory PSEUDO CODE
// updateName(name){this.setState....} updatePW(pw){this.setState....}
//
// submitLogin(){
//
//   axios.post('/login', {data:{ this.username, password}})
//
// }
