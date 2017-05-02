import React, {Component} from 'react';

class MedsInteract extends Component {
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