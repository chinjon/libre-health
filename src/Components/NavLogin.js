import React, {Component} from 'react';

class NavLogin extends React.Component {
  constructor(props) {
    super(props)
  }

    submit(){

    }

  render() {
    return (

      <form className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} />
          </p>
        </form>

      )
    }
  }

  export default NavLogin;
