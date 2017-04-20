import React, {Component} from 'react';

class PatientCard extends Component {
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
                                <strong>John Smith</strong>
                                <small>@johnsmith</small>
                                <small>31m</small>
                                <br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit
                                amet massa fringilla egestas. Nullam condimentum luctus turpis.
                            </p>
                        </div>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item">
                                    <span className="icon is-small">
                                        <i className="fa fa-reply"></i>
                                    </span>
                                </a>
                                <a className="level-item">
                                    <span className="icon is-small">
                                        <i className="fa fa-retweet"></i>
                                    </span>
                                </a>
                                <a className="level-item">
                                    <span className="icon is-small">
                                        <i className="fa fa-heart"></i>
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

export default PatientCard;