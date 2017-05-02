import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import Navigation from './../Navigation';
import Footer from './../Footer';

class Landing extends Component {

  componentWillReceiveProps(nextProps) {
    debugger;
    console.log(nextProps);
    //check for isAuth and call a redirect??? or do this further down the tree?
    if(nextProps.isAuth) {

      browserHistory.push('/Dashboard');
    }
  }

  // componentDidUpdate(){
  //   debugger;
  //   console.log('landing',this.props)
  //   if(this.props.isAuth){
  //     browserHistory.push('/Dashboard');
  //   }
  // }
 
  render() {
    //Landing page receives props from app, which will be the user
    //and the form handling functions
    // if(this.props.isAuth) {
    //   return null;
    // }
    return (
      <div>
        <Navigation newUser={this.props.newUser} login={this.props.login} isAuth={this.props.isAuth}/>
        <section className="hero is-info is-large is-fullheight is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <h1 className="title is-1 has-text-centered">
                    Libre Health
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default Landing;
