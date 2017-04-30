import React, {Component} from 'react';
import ReactModal from 'react-modal';

import SignUpForm from './SignUpForm'
// import Radium from 'radium';

const modalStyle = {
    content: {
        width: 400,
        margin: '10em auto',
        padding: '1em',
        height: 450
    }
}

class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this
            .handleOpenModal
            .bind(this);
        this.handleCloseModal = this
            .handleCloseModal
            .bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.handleOpenModal}>Trigger Modal</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    style={modalStyle}>
                    <div>
                        <div class="columns">
                            <div className="column">
                                <SignUpForm/>
                            </div>
                        </div>
                        <div className="columns has-text-centered">
                            <div className="column">
                                <button className="button is-info">Submit</button>
                            </div>
                            <div className="column">
                                <button className="button is-danger" onClick={this.handleCloseModal}>Cancel</button>
                            </div>
                        </div>
                    </div>

                </ReactModal>
            </div>
        );
    }
}

export default SignUp;