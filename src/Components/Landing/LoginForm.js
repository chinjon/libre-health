import React, {Component} from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            password: '',
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange = event => {
    const target = event.target;
    const name = target.name;
    this.setState({[name]: target.value});

    event.preventDefault();
  }

  submitForm(event) {
    event.preventDefault();
    helpers.loginUser(this.state.username, this.state.password).then((data) => {
      // do log in magic
      console.log(`in login component ${data}`);
    })
  }

    render() {
        return (
            <form onSubmit={this.submitForm.bind(this)} className="nav-center nav-menu">
         {/*<form className="nav-center nav-menu"> */}
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
        )
    }
}

export default LoginForm;