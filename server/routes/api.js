var axios = require('axios');

function getRxcui(drug) {

  return new Promise(function (resolve, reject) {

    var queryUrl = 'https://rxnav.nlm.nih.gov/REST/drugs.json?name=' + drug;

    axios.get(queryUrl).then(function(response){
      // console.log(response.data.drugGroup.conceptGroup[1].conceptProperties[0].rxcui);
      // resolve(response.data.drugGroup.conceptGroup[1].conceptProperties[0].rxcui);

      var conceptGroup = response.data.drugGroup.conceptGroup;

      var SBD = conceptGroup.filter(function(e) {
        return e.tty == 'SBD'
      });

      // var dosage = SBD[0].conceptProperties.find((e)=>e.name.includes(process.argv[3]));
      // console.log(dosage);
      // //we can filter SBD on dosage or brand-name

      // resolve(dosage.rxcui);

      // console.log("RXCUI ", SBD[0].conceptProperties[0].rxcui);

      resolve(SBD[0].conceptProperties[0].rxcui);

    }).catch(function(err){
      if (err) {
        reject(err)
      }
    });

  });

}

// function getInteractions(drug) {

//   getRxcui(drug).then(function(rxcui) {

//     axios.get(`https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}&sources=DrugBank`)
//     .then(function(response) {
//       // console.log(response.data);
//       var pairsArray = response.data.interactionTypeGroup[0].interactionType[0].interactionPair;

//       var newArray = pairsArray.map(function(e) {

//         var name = e.interactionConcept[1].sourceConceptItem.name
//         var severity = e.severity
//         var description = e.description

//         return {name, severity, description};
//       });

//       compareDrugs(newArray);
//       fs.writeFileSync('interactionMapped.json', JSON.stringify(newArray), 'utf-8');

//     }).catch(function (err) {
//       if (err)
//         console.log(err)
//     });

//   });
// }

// // const drugOne = process.argv[2];
// // const drugTwo = process.argv[3];

// function compareDrugs(arr) {

//   let interaction = arr.filter(e => e.name.toLowerCase() === drugTwo);
//   console.log(interaction);
// }

// getInteractions(drugOne);

/// list of drugs option
function getMultipleInteractions(drugsList) {

  return new Promise(function(resolve, reject){
    var promiseArray = [];

    drugsList.forEach(function(drug) {
      promiseArray.push(getRxcui(drug));
    });

    Promise.all(promiseArray).then(function(data){

      // fs.writeFileSync('rxcuis.json', JSON.stringify(data), 'utf-8');

      var sources = data.join('+');
      // console.log('Sources: ', sources);

      var queryUrl = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=' + sources;

      axios.get(queryUrl).then(function(response) {

        var interactionTypeArray = response.data.fullInteractionTypeGroup;

        var interactionPairs = [];
        interactionTypeArray.forEach(function(e){
          var innerInteractionTypeArray = e.fullInteractionType;
          innerInteractionTypeArray.forEach(function(e){
            console.log('pair', e.interactionPair);
            interactionPairs.push(e.interactionPair);
          })
        });

        resolve(interactionPairs);
        // fs.writeFileSync('interactionsList.json', JSON.stringify(response.data), 'utf-8');
      }).catch(function (err) {
        if (err)
          reject(err);
      });
    }).catch(function (err) {
        if (err)
          reject(err);
    });;

  });
}

module.exports = {getRxcui: getRxcui, getMultipleInteractions: getMultipleInteractions};
