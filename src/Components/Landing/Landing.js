import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import { DefaultPlayer as Video } from 'react-html5video';

import Navigation from './../Navigation';
import Footer from './../Footer';

import thisSrcWebm from './../../../public/assets/video/WEBM/Healthy-Life.webm'
import thisSrcMp4 from './../../../public/assets/video/MP4/Healthy-Life.mp4'
import thisSrcJpeg from './../../../public/assets/video/Snapshots/Healthy-Life.jpg'

class Landing extends Component {

  componentWillReceiveProps(nextProps) {
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

    return (
      <div className="overColor">
        <Navigation newUser={this.props.newUser} login={this.props.login} isAuth={this.props.isAuth}/>
        {/* <section className="hero is-info is-large is-fullheight is-bold">
          <div className="hero-body">
            <div className="container"> */}
              <div className="homepage-hero-module overColor">
                <div className="overColor video-container">
                  <h1 className="overColor title is-1 has-text-centered landing-text">
                    Libre Health
                  </h1>
                  <div className="filter overColor"></div>
                  <Video autoPlay loop
                    poster={thisSrcJpeg}
                    className="fillWidth">
                    <source src={thisSrcMp4} type="video/mp4"/>
                    <source src={thisSrcWebm} type="video/webm"/>
                  </Video>
                </div>
              </div>
              {/* <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <h1 className="title is-1 has-text-centered">
                    Libre Health
                  </h1>
                </div>
              </div> */}
            {/* </div>
          </div>
        </section> */}
        <Footer/>
      </div>
    )
  }
}

export default Landing;


{/* <div class="homepage-hero-module">
  <div class="video-container">
    <div class="filter"></div>
    <video autoplay loop class="fillWidth">
      <source src="%PUBLIC_URL%/assets/video/MP4/Healthy-Life.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
      <source src="%PUBLIC_URL%/assets/video/WEBM/Healthy-Life.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
    </video>
  </div>
</div> */}
