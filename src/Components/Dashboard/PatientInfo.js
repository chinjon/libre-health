import React, {Component} from 'react';
import MedsListBody from './MedsListBody';
import MedsInteract from './MedsInteract';

import Radium from 'radium';

const styles = {
    base: {
        padding: '1.5rem',
        height: "100%"
    }
}

class PatientInfo extends Component {
    render() {
        return (
            <div className="box" style={styles.base}>

                <div className="columns">
                    <div className="column">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-150x150">
                                    <img src="https://placehold.it/150x150" alt="dummy pic"/></figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong>Patient #1</strong>
                                        <br/>
                                    </p>
                                </div>
                                <nav className="level is-mobile">
                                    <div className="level-left">
                                        <a className="level-item">
                                            <span className="icon is-small">
                                                <i className="fa fa-heartbeat"></i>
                                            </span>
                                        </a>
                                        <a className="level-item">
                                            <span className="icon is-small">
                                                <i className="fa fa-user-md"></i>
                                            </span>
                                        </a>
                                        <a className="level-item">
                                            <span className="icon is-small">
                                                <i className="fa fa-medkit"></i>
                                            </span>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </article>
                    </div>
                    <div className="column">
                        <MedsListBody userId={this.props.user._id} medications={this.props.user.medications} addMedications={this.props.addMedications}/>
                    </div>
                    <div className="column">
                        <MedsInteract medications={this.props.user.medications}/>
                    </div>

                </div>
            </div>

        )
    }
}

export default Radium(PatientInfo);