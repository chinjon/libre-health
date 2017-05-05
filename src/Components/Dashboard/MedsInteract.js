import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import helpers from './../utils/helpers';

class MedsInteract extends Component {

  constructor(props) {
    super(props);
    this.state = {
      interactionArray: [],
      drugNames: [],
    }
  }

  componentWillMount() {
    //verify there are more than one medication before checking interactions
    if (this.props.medications.length > 1) {
      //map medications to an array of rxcuis to call helper
      let medList = this.props.medications.map(e => e.rxcui);
      //call helper
      helpers.checkInteractions(medList).then(data => {
        //data is an array of objects, split into to arrays for setting state to better render table
        let drugNames = data.map(e=>e.drugName);
        let interactions = data.map(e=>e.interactions);
        this.setState({drugNames: drugNames, interactionArray:interactions});
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    //check that there is a new medication or one was removed and that there is more than one medication
    if (nextProps.medications.length != this.props.medications.length && nextProps.medications.length > 1) {
      //map medications to an array of rxcuis to call helper
      let medList = nextProps.medications.map(e => e.rxcui);
      //call helper function
      helpers.checkInteractions(medList).then(data => {
        // data is an array of objects, split into two arrays for setting state to better render table
        let drugNames = data.map(e=>e.drugName);
        let interactions = data.map(e=>e.interactions);
        this.setState({drugNames: drugNames, interactionArray: interactions});
      })
    } else if (nextProps.medications.length <= 1) {
      this.setState({drugNames: [], interactionArray: []});
    }

  }

  renderTabList(arr) {
    if(this.state.drugNames.length)
      return this.state.drugNames.map((drugName, i) => <Tab key={i}>{drugName}</Tab>)
    else return <div className='panel-block has-text-centered'><p>Not enough data to compute interactions. Please enter more medications.</p></div>
  }

  //function to render interactions into table
  renderTabPanels(arr){
    if(arr.length)
      return arr.map(interaction=><p className='panel-block'>{interaction.description}</p>)
    else return <p className='panel-block'>No known interactions</p>
  }

    renderMedsPanel() {
      return (
        <Tabs>
          <TabList>
            {this.state.drugNames.map((drugName, i) =>
              <Tab>
                  {drugName}
              </Tab>
            )}
          </TabList>
            {this.state.interactionArray.map((arr,i) =>
              <TabPanel>
                  {this.renderTabPanels(arr)}
              </TabPanel>
            )}
         </Tabs>
       )
    }

  render() {
    return (
      <div className="box">
        <div className='panel'>
          <p className="panel-heading has-text-centered">
             <h5 className="title is-5">Medication Interactions</h5>
          </p>

        {this.renderMedsPanel()}
        </div>
      </div>
    )
  }
}


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


export default MedsInteract;
