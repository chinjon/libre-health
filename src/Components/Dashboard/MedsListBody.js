import React, {Component} from 'react';

import helpers from './../utils/helpers';

import MedsListSearchForm from './MedsListSearchForm';
import MedsListDropDown from './MedsListDropDown';
import MedsListDeleteButton from './MedsListDeleteButton';

class MedsListBody extends Component {

    constructor(props) {
        super(props);
        this.getMedsList = this.getMedsList.bind(this);
        this.userReturn = this.userReturn.bind(this);
        this.state = {
            medsList: [],
            listReceived: false,
            medications: []
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

    getMedsList(med){
        helpers.getMedsList(med)
        .then(medsList=> this.setState({medsList: medsList, listReceived: true}))
        .catch(err=>{if(err){console.log(err)}});
        //we need to think through error handling
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
