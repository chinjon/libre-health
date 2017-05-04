import React, {Component} from 'react';
import MedsListBody from './MedsListBody';
import TestMedsInteract from './TestMedsInteract';

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
                        <MedsListBody userId={this.props.user._id} medications={this.props.user.medications} addMedication={this.props.addMedication} deleteMedication={this.props.deleteMedication}/>
                    </div>
                    <div className="column">
                        <TestMedsInteract medications={this.props.user.medications}/>
                    </div>

                </div>
            </div>

        )
    }
}

export default Radium(PatientInfo);