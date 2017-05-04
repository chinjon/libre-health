import React, {Component} from 'react';

import helpers from './../utils/helpers';

import MedsListSearchForm from './MedsListSearchForm';
import MedsListDropDown from './MedsListDropDown';

class MedsListBody extends Component {

    constructor(props) {
        super(props);
        this.getMedsList = this.getMedsList.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            medsList: [],
            listReceived: false
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.medications.length > this.props.medications.length
            || nextProps.medications.length < this.props.medications.length) {
            this.setState({medsList: [], listReceived: false});
        }
    }

    getMedsList(med){
        helpers.getMedsList(med)
        .then(medsList=> this.setState({medsList: medsList, listReceived: true}))
        .catch(err=>{if(err){console.log(err)}});
        //we need to think through error handling
    }

    handleClick(event){
        console.log(event.target);

    }

    renderMedsList(medsList) {
        return(
            <div>
            {medsList.map((e, i) =>
                <span className='field'>
                    <a key={i} className="panel-block">
                        {e.name}
                        <a id={e.rxcui} value={e.rxcui} className="button is-danger is-outlined" onClick={this.handleClick}>
                            <span className="icon is-small">
                                <i className="fa fa-times"></i>
                            </span>
                        </a>
                    </a>
                </span>                
            )}
            </div>
        )
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
                    {this.renderMedsList(this.props.medications)}
                </nav>

        )
    }
}

export default MedsListBody;
