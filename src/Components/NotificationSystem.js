import React, {Component} from 'react';
import NotificationSystem from 'react-notification-system';

  class Notifications extends Component {

  	constructor(props) {
  		super(props);
  		this._addNotification = this._addNotification.bind(this);
  		this.state = {
  			_notificationSystem: null,
  			notification: {}
  		}
  	}

	  //initialize the notification system
	  componentDidMount() {
	    this.setState({_notificationSystem: this.refs.notificationSystem});
	  }

	  componentWillReceiveProps(nextProps) {
	  	//will receive from app title, message, and error level
	  	//setState if there is a change
	  	if(nextProps.notification.title) {
	  		this.setState({notification: nextProps.notification});
	  	}
	  }

	  componentDidUpdate(prevProps, prevState) {
	  	//restore props to null to prevent unwanted notifications
	  	if(prevState.notification.title) {
	  		this.setState({notification: {}});
	  	}
	  }

	  _addNotification(title, message, level) {
	  	this.state._notificationSystem.addNotification({
		    title, message, level, position: 'tc', autoDismiss: 3
		  });
		}

	  render() {
	  	//only callNotifications is there is a new message
	  	let callNotification = null;
	  	if(this.state.notification.title) 
	  		callNotification = this._addNotification(this.state.notification.title, this.state.notification.message, this.state.notification.level);
	  	
	  	return (

	  		<div>
	        {callNotification}
	        <NotificationSystem ref="notificationSystem" />
	      </div>

	  	)
	  }
}

export default Notifications;