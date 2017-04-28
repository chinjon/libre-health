import React, {Component} from 'react';

import Navigation from './../Navigation';
import Footer from './../Footer';

class Landing extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <section className="hero is-info is-large is-fullheight is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-half is-offset-one-quarter">
                                    <h1 className="title is-1 has-text-centered">
                                        Libre Health
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>

        )
    }
}

export default Landing;