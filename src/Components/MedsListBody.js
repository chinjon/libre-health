import React, {Component} from 'react';

class MedsListBody extends Component {
    render() {
        return (
            <div className="container">

                        <nav className="panel">
                            <p className="panel-heading has-text-centered">
                                Medications
                            </p>
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <i className="fa fa-heart"></i>
                                </span>
                                Medication #1
                            </a>
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <i className="fa fa-user-md"></i>
                                </span>
                                Medication #2
                            </a>
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <i className="fa fa-plus-square"></i>
                                </span>
                                Medication #3
                            </a>
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <input type="checkbox" />
                                </span>
                                Medication #4
                            </a>
                        </nav>
            </div>

        )
    }
}

export default MedsListBody;