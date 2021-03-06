import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import helpers from './../utils/helpers';

class TestMedsInteract extends Component {

  constructor(props) {
    super(props);
    this.state = {
      interactions: {},
      medsList: [],
      isLoading: true
    }

  }

  componentWillMount() {
    if (this.props.medications.length > 1) {
      let medList = this.props.medications.map(e => e.rxcui);
      helpers.checkInteractions(medList).then(data => {
        console.log(data)
        this.setState({interactions: data, isLoading: false});
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.medications.length > 1) {
      let medList = nextProps.medications.map(e => e.rxcui);
      helpers.checkInteractions(medList).then(data => {
        console.log(data)
        this.setState({interactions: data});
      })
    }

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
    // this.props.medications will be used to call the interactions api
    return (
      <div className="box has-text-centered">
        <h5 className="title is-5">Medication Interactions</h5>
       <Tabs>
        <MedicationBlock MedicationList={this.props.medications} />


        <MedInteractPanels MedicationList={this.props.medications} />
       </Tabs>
      </div>
    )
  }
}

// render() {
// // this.props.medications will be used to call the interactions api
// return (
//   <div className="box has-text-centered">
//     <h5 className="title is-5">Medication Interactions</h5>
//     <div className="tabs is-medium">
//       <ul>
//         <li class="is-active">
//           <a>Tylenol</a>
//         </li>
//         <li>
//           <a>Xanax</a>
//         </li>
//         <li>
//           <a>Cocaine</a>
//         </li>
//         <li>
//           <a>Allergy Med</a>
//         </li>
//       </ul>
//     </div>
//     <div className="media">
//       <table className="table is-bordered is-striped is-narrow">
//         <thead>
//           <tr>
//             <th>Medication</th>
//             <th>Severity</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="is-selected">
//             <td>Tylenol</td>
//             <td>
//               <span class="tag is-medium is-warning">Warning</span>
//             </td>
//           </tr>
//           <tr>
//             <td>Tylenol</td>
//             <td>Crazy Bad</td>
//           </tr>
//           <tr>
//             <td>Tylenol</td>
//             <td>Crazy Bad</td>
//           </tr>
//           <tr>
//             <td>Tylenol</td>
//             <td>Crazy Bad</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   </div>
// )
// }
// }

const medsTab = ({interactionList}) => {
    return (
        <div className="tabs is-medium">
            <ul>
                {interactionList.map((e, i) =>
                    <li><a>{e.name}</a></li>
                )}
            </ul>
        </div>
    )
}

const MedsTable = ({interactionResults}) =>{
    return (
        <div className="media">
                    <table className="table is-bordered is-striped is-narrow">
                        <thead>
                            <tr>
                                <th>Medication</th>
                                <th>Severity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {interactionResults.map((e, i) =>
                                <tr>
                                <td>{e.name}</td>
                                <td>{e.message}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
    )
}

const MedicationBlock = ({MedicationList}) => {
    return (
        <TabList>
            {MedicationList.map((e, i) =>
                <Tab>
                    {e.name}
                </Tab>
            )}
        </TabList>
    )
}

const MedInteractPanels = ({MedicationList}) =>{
    return(
        <div>
            {MedicationList.map((e,i)=>{
                <TabPanel>
                    {i}
                </TabPanel>
            })}
        </div>
    )
}

export default TestMedsInteract;
