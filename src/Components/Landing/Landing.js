import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import Navigation from './../Navigation';
import Footer from './../Footer';

import thisSrcWebm from './../../../public/assets/video/WEBM/Healthy-Life.webm'
import thisSrcMp4 from './../../../public/assets/video/MP4/Healthy-Life.mp4'
import thisSrcJpeg from './../../../public/assets/video/Snapshots/Healthy-Life.jpg'

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
          {/* <div className="homepage-hero-module">
            <div className="video-container">
              <div className="filter"></div>
              <video autoplay loop className="fillWidth">
                <source src={thisSrcMp4} type="video/mp4"/>Your browser does not support the video tag. I suggest you upgrade your browser.
                <source src={thisSrcWebm} type="video/webm"/>Your browser does not support the video tag. I suggest you upgrade your browser.
              </video>
              <div className="poster hidden">
                <img src={thisSrcJpeg}/>
              </div>
            </div>
          </div> */}
          <section className="hero is-fullheight is-dark">

  <div className="hero-body">
    <div className="container has-text-centered">
      <div className="columns is-vcentered">
        <div className="column is-5">
          <figure className="image is-4by3">
            <img src="https://images.unsplash.com/photo-1461669802687-84a1aee43a29?dpr=1&auto=format&crop=entropy&fit=crop&w=800&h=600&q=80" className="promo-img" alt="Description" />
          </figure>
        </div>
        <div className="column is-6 is-offset-1">
          <h1 className="title is-2">
            Introducing Landing Page
          </h1>
          <h2 className="subtitle is-4">
            It's time to say hello to bulma.
          </h2>
          <br />
          <p className="control has-addons has-text-centered">
            <input className="input is-expanded is-large" type="text" placeholder="Join the beta waitlist, you@example.org"/>
            <a className="button is-large is-danger is-outlined">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="hero-foot">
    <div className="container">
      <div className="tabs is-centered">
        <ul>
          {/* <li><a href="http://bulma.io">Made with bulma</a></li> */}
          {/* <li><a>Copyright 2017 Libre Health</a></li> */}
          {/* <li><a href="http://unsplash.com">Images via unsplash</a></li> */}
        </ul>
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


{/* <div className="homepage-hero-module">
  <div class="video-container">
    <div class="filter"></div>
    <video autoplay loop class="fillWidth">
      <source src="%PUBLIC_URL%/assets/video/MP4/Healthy-Life.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
      <source src="%PUBLIC_URL%/assets/video/WEBM/Healthy-Life.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
    </video>
  </div>
</div> */}


{/* <div className="hero-body">
  <div className="container">
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
        <h1 className="title is-1 has-text-centered">
          Libre Health
        </h1>
      </div>
    </div>
  </div>
</div> */}
