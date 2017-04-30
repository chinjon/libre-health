import React, {Component} from 'react';
import ReactModal from 'react-modal';

import SignUpForm from '../SignUpForm'
// import Radium from 'radium';

const modalStyle ={
    content : {
        width: 400,
        margin: '10em auto',
        padding: '1em'
    }
}


class SignUp extends Component{

 constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <button className="button" onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           style={modalStyle}
        >
        <SignUpForm />
          <button className="button" onClick={this.handleCloseModal}>Cancel</button>
        </ReactModal>
      </div>
    );
  }
}

export default SignUp;