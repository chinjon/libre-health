import React, {Component} from 'react';
import ReactModal from 'react-modal';

import SignUpForm from './SignUpForm'

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

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {

    //check to see if this.props.isAuth is true, then do something ???? Not sure what here
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
        <button className="button" onClick={this.handleOpenModal}>Sign Up</button>
        <ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example" style={modalStyle}>
          <div>
            <div class="columns">
              <div className="column">
                <SignUpForm newUser={this.props.newUser} closeModal={this.handleCloseModal} isAuth={this.props.isAuth}>
                  <button className="button is-danger" onClick={this.handleCloseModal}>Cancel</button>
                </SignUpForm>
              </div>
            </div>
          </div>

        </ReactModal>
      </div>
    );
  }
}

export default SignUp;
