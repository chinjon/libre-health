import React, {Component} from 'react';
import DashboardNav from './DashboardNav';
import MedsListBody from './MedsListBody';

const dashboardBodyStyle = {
    padding: "3rem 1rem",
}

class DashboardBody extends Component {
    render() {
        return (
            <div clasName="container" style={dashboardBodyStyle}>
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-2">
                        <DashboardNav />
                    </div>
                    <div className="tile is-parent is-3">
                        <MedsListBody />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default DashboardBody;