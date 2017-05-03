import React, {Component} from 'react';

class MedsInteract extends Component {
    render(){
        // this.props.medications will be used to call the interactions api
        return (
            <div className="box has-text-centered">
            <h5 className="title is-5">Medication Interactions</h5>
                <div className="tabs is-medium">
                    <ul>
                        <li class="is-active"><a>Tylenol</a></li>
                        <li><a>Xanax</a></li>
                        <li><a>Cocaine</a></li>
                        <li><a>Cronic</a></li>
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