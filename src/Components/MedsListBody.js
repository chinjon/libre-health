import React, {Component} from 'react';

class MedsListBody extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        console.log(this.input.value);
        e.preventDefault();
    }
    
    render() {
        return (
                <nav className="panel">
                    <p className="panel-heading has-text-centered">
                        Medications
                    </p>
                    <div className="panel-block">
                        <div className="control has-icons-left">
                            <div className="field has-addons">
                                <p className="control">
                                    <input className="input is-small" ref={(input) => this.input = input} type="text" placeholder="Add medication"/>
                                </p>
                                <p className="control">
                                    <a className="button is-small">Add</a>
                                </p>
                            </div>
                        </div>
                    </div>
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
                            <input type="checkbox"/>
                        </span>
                        Medication #4
                    </a>
                </nav>

        )
    }
}

export default MedsListBody;