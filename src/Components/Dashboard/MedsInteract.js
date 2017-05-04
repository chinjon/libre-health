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
    if (this.props.medications.length > 1) {
      let medList = this.props.medications.map(e => e.rxcui);
      helpers.checkInteractions(medList).then(data => {
        let drugNames = data.map(e=>e.drugName);
        console.log(drugNames)
        let interactions = data.map(e=>e.interactions);
        console.log(interactions);
        this.setState({drugNames: drugNames, interactionArray:interactions});
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.medications.length != this.props.medications.length && nextProps.medications.length > 1) {
      let medList = nextProps.medications.map(e => e.rxcui);
      helpers.checkInteractions(medList).then(data => {
        let drugNames = data.map(e=>e.drugName);
        console.log(drugNames);
        let interactions = data.map(e=>e.interactions);
        console.log(interactions);
        this.setState({drugNames: drugNames, interactionArray: interactions});
      })
    }

  }

  renderTabPanels(arr){
    if(arr.length)
      return arr.map(interaction=><p>{interaction.description}</p>)
    else return <p>No known interactions</p>
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
    // this.props.medications will be used to call the interactions api
    return (
      <div className="box">
        <h5 className="title is-5">Medication Interactions</h5>
        {this.renderMedsPanel()}
      </div>
    )
  }
}

export default MedsInteract;