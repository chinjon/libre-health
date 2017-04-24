import React, {Component} from 'react';

class NavLogin extends React.Component {
  constructor(props) {
    super(props)
  }

    submit(){

    }

  render() {
    return (
      <div className="nav-item">
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} />
          </p>
        </div>
      </div>
      )
    }
  }

  export default NavLogin;
