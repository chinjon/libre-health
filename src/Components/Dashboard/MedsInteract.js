import React, {Component} from 'react';
import helpers from './../utils/helpers';

class MedsInteract extends Component {

    constructor(props){
        super(props);
        this.state = {
            interactions: {},
            isLoading: true
        }

    }

    componentWillMount(){
        if(this.props.medications.length > 1) {
            let medList = this.props.medications.map(e=>e.rxcui);
            helpers.checkInteractions(medList).then(data=>{
                console.log(data)
                this.setState({interactions: data, isLoading: false});
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.medications.length > 1) {
            let medList = nextProps.medications.map(e=>e.rxcui);
            helpers.checkInteractions(medList).then(data=>{
                console.log(data)
                this.setState({interactions: data});
            })
        }
    }



    render(){
        // this.props.medications will be used to call the interactions api
        return (
            <div className="box has-text-centered">
            <h5 className="title is-5">Medication Interactions</h5>
                <div className="media">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Medication</th>
                                <th>Medication</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}


export default MedsInteract;