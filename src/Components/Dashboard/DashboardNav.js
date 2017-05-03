import React, {Component} from 'react';
import Radium from 'radium';

// const style ={
//   base: {
//     backgroundColor:
//   }
// }

class DashboardNav extends Component {
  render() {
    return (
      <aside className="menu">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Account Settings</a>
          </li>
        </ul>
        <p className="menu-label">
          Your Health
        </p>
        <ul className="menu-list">
          <li>
            <a>Patient Profile Settings</a>
          </li>
          <li>
            <a className="is-active">Manage Your Medications</a>
            <ul>
              <li>
                <a>View Medications</a>
              </li>
              <li>
                <a>View Medication Interactions</a>
              </li>
              <li>
                <a>Edit Medications</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Track Health</a>
          </li>
          <li>
            <a>Dietary</a>
          </li>
          <li>
            <a>Exercise Log</a>
          </li>
        </ul>
      </aside>
    )
  }
}

export default DashboardNav;
