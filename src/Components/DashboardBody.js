import React, {Component} from 'react';
import DashboardNav from './DashboardNav';
import MedsListBody from './MedsListBody';
import DashboardPatientCard from './DashboardPatientCard';

import Radium from 'radium';


let styles = {
    base: {
        padding: '2.4rem',
        margin: '1rem',
        border: 'black solid 1px',
    }
}

class DashboardBody extends React.Component {
    render() {
        return (
            <div>
                <div className="columns" style={styles.base}>
                    <div className="column is-2">
                        <DashboardNav />
                    </div>
                    <div className="column is-3">
                        <MedsListBody />
                    </div>
                    <div className="column is-3">
                        <DashboardPatientCard />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Radium(DashboardBody);