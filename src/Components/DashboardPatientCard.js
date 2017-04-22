import React, {Component} from 'react';

class DashboardPatientCard extends React.Component {
    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image"/></figure>
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
        )
    }
}

export default DashboardPatientCard;
