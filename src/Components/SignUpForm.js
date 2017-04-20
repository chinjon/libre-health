import React, {Component} from 'react';

class SignUpForm extends React.Component {
    render() {
        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        New User Sign Up
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                    </div>
                </div>
                <footer className="card-footer">
                <a className="card-footer-item">Submit</a>
                <a className="card-footer-item">Cancel</a>
                </footer>
            </div>
        )
    }
}

export default SignUpForm;