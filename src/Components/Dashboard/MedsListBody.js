import React, {Component} from 'react';

import helpers from './../utils/helpers';

import MedsListSearchForm from './MedsListSearchForm';
import MedsListDropDown from './MedsListDropDown';

class MedsListBody extends Component {

    constructor(props) {
        super(props);
        this.getMedsList = this.getMedsList.bind(this);
        this.state = {
            medsList: [],
            listReceived: false
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.medications.length > this.props.medications.length) {
            this.setState({medsList: [], listReceived: false});
        }
    }

    getMedsList(med){
        helpers.getMedsList(med)
        .then(medsList=> this.setState({medsList: medsList, listReceived: true}))
        .catch(err=>{if(err){console.log(err)}});
        //we need to think through error handling
    }

    render() {
        //conditionally render search form or drop-down
        let form = null;
        if (!this.state.listReceived) form = <MedsListSearchForm getMedsList={this.getMedsList}/>
        else form = <MedsListDropDown userId={this.props.userId} addMedication={this.props.addMedication} medsList={this.state.medsList}/>

        return (
                <nav className="panel">
                    <p className="panel-heading has-text-centered">
                        Medications
                    </p>
                    <div className="panel-block">
                        <div className="control has-icons-left">
                            {form}
                        </div>
                    </div>
                    <MedicationBlock MedicationList={this.props.medications} />
                </nav>

        )
    }
}


const MedicationBlock = ({MedicationList}) => {
        return(
            <div>
            {MedicationList.map((e, i) =>
                <a key={i} className="panel-block">
                    <span className="panel-icon">
                        <i className="fa fa-plus-square"></i>
                    </span>
                    {e.name}
                </a>
            )}
            </div>
        )
}


export default MedsListBody;
