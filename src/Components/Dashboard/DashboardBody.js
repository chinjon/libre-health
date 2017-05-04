import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import DashboardNav from './DashboardNav';
import PatientInfo from './PatientInfo';
import Footer from './../Footer';

import Radium from 'radium';

let styles = {
  base: {
    padding: '1rem',
    margin: '1rem',
    border: 'black solid 1px',
    width: '100%'
  }
}

class DashboardBody extends Component {

  componentWillMount() {
    //check for isAuth and call a redirect??? or do this further down the tree?
    if(!this.props.isAuth) {
      browserHistory.push('/');
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="columns" style={styles.base}>
            <div className="column is-2">
              <DashboardNav user={this.props.user}/>
            </div>
            <div className="column is-10">
              <div className="columns is-multiline">
                <div className="column">
                  <PatientInfo user={this.props.user} addMedication={this.props.addMedication} deleteMedication={this.props.deleteMedication}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Radium(DashboardBody);
