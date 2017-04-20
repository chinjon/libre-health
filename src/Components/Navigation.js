import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="nav">
  <div className="nav-left">
    <a className="nav-item">
      <img src="./assets/img/logo/logo.png" alt="Bulma logo" />
    </a>
  </div>

  <div className="nav-center">
   
  </div>


  <span className="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>


  <div className="nav-right nav-menu">
    <a className="nav-item">
      Home
    </a>
    <a className="nav-item">
      Documentation
    </a>
    <a className="nav-item">
      Blog
    </a>

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
      </div>
    </div>
  </div>
</nav>
        )
    }
}

export default Navigation;