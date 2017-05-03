import React, {Component} from 'react';
import helpers from './../utils/helpers';

class MedsInteract extends Component {

    constructor(props){
        super(props);
        this.state = {
            interactions: {}
        }

    }

    componentWillMount(){
        if(this.props.medications.length > 1) {
            let medList = this.props.medications.map(e=>e.name);
            helpers.checkInteractions(medList).then(data=>{
                console.log(data)
                this.setState({interactions: data});
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.medications.length > 1) {
            let medList = nextProps.medications.map(e=>e.name);
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
                <div className="tabs is-medium">
                    <ul>
                        <li class="is-active">
                            <a>Tylenol</a>
                        </li>
                        <li>
                            <a>Xanax</a>
                        </li>
                        <li>
                            <a>Cocaine</a>
                        </li>
                        <li>
                            <a>Allergy Med</a>
                        </li>
                    </ul>
                </div>
                <div className="media">
                    <table className="table is-bordered is-striped is-narrow">
                        <thead>
                            <tr>
                                <th>Medication</th>
                                <th>Severity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="is-selected">
                                <td>Tylenol</td>
                                <td><span class="tag is-medium is-warning">Warning</span></td>
                            </tr>
                            <tr>
                                <td>Tylenol</td>
                                <td>Crazy Bad</td>
                            </tr>
                            <tr>
                                <td>Tylenol</td>
                                <td>Crazy Bad</td>
                            </tr>
                            <tr>
                                <td>Tylenol</td>
                                <td>Crazy Bad</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default MedsInteract;
