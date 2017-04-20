import React, {Component} from 'react';
import DashboardNav from './DashboardNav';
import MedsListBody from './MedsListBody';

const dashboardBodyStyle = {
    padding: "3rem 1rem",
}

class DashboardBody extends Component {
    render() {
        return (
            <div style={dashboardBodyStyle}>
                <div className="columns">
                    <div className="column is-2">
                        <DashboardNav />
                    </div>
                    <div className="column is-4">
                        <MedsListBody />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default DashboardBody;