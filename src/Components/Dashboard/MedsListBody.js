import React, {Component} from 'react';

import helpers from './../utils/helpers';

import MedsListSearchForm from './MedsListSearchForm';
import MedsListDropDown from './MedsListDropDown';
import MedsListDeleteButton from './MedsListDeleteButton';
import Notifications from './../NotificationSystem';

class MedsListBody extends Component {

    constructor(props) {
        super(props);
        this.getMedsList = this.getMedsList.bind(this);
        this.userReturn = this.userReturn.bind(this);
        this.state = {
            medsList: [],
            listReceived: false,
            medications: [],
            notification: {
                title: null,
                message: null,
                level: null
            }
        }
    }

    componentWillMount() {
        this.setState({medications: this.props.medications});
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.medications.length != this.props.medications.length) {
            this.setState({medsList: [], listReceived: false, medications: nextProps.medications});
        }
    }

    componentDidUpdate(prevProps, prevState) {
        //keep notifications from refiring on every update to state
        if(prevState.notification.title) {
          this.setState({notification: {title: null, message: null, level: null}});
        }
    }

    getMedsList(med){
        helpers.getMedsList(med)
        .then(medsList=> this.setState({medsList: medsList, listReceived: true}))
        .catch(err=>{
          console.error(err);
          this.setState({notification: {title: 'Invalid Search Term', message: 'Please Check the Spelling of Your Search Term and Try Again', level: 'warning'}})
        });
    }

    userReturn() {
        this.setState({medsList: [], listReceived: false});
    }

    renderMedications(medications) {
        return(
            <div className='panel'>
            {medications.map((med, i) =>
                <a key={i} className="panel-block">

                    <p className = 'control'>
                        <span className='is-pulled-left'>{med.name}</span>
                   
                        <p className='is-pulled-right'>
                            <MedsListDeleteButton medication={med.rxcui} userId={this.props.userId} deleteMedication={this.props.deleteMedication}/>
                        </p>
                    </p>
                </a>
            )}
            </div>
        )
    }

    render() {
        //conditionally render search form or drop-down
        let form = null;
        if (!this.state.listReceived) form = <MedsListSearchForm getMedsList={this.getMedsList}/>
        else form = <MedsListDropDown userId={this.props.userId} userReturn={this.userReturn} addMedication={this.props.addMedication} medsList={this.state.medsList}/>

        return (
                <nav className="panel">
                    <Notifications notification={this.state.notification}/>
                    <p className="panel-heading has-text-centered">
                        Medications
                    </p>
                    {form}
                    {this.renderMedications(this.state.medications)}
                </nav>

        )
    }
}

export default MedsListBody;
