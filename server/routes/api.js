var axios = require('axios');

function getRxcui(drug) {

  return new Promise(function (resolve, reject) {

    var queryUrl = 'https://rxnav.nlm.nih.gov/REST/drugs.json?name=' + drug;

    axios.get(queryUrl).then(function(response){

      var conceptGroup = response.data.drugGroup.conceptGroup;

      var medsArray = [];

      conceptGroup.forEach(function(e){
        var medsList = e.conceptProperties;
        if(medsList) {
          medsList.forEach(function(e){
            medsArray.push({rxcui: e.rxcui, name: e.name})
          });
        }
      });

      resolve(medsArray);

    }).catch(function(err){
      if (err) {
        reject(err)
      }
    });

  });
}

/// list of drugs option
function getMultipleInteractions(drugsList) {

  return new Promise(function(resolve, reject){
  
      var sources = drugsList.join('+');

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

      }).catch(function (err) {
        if (err)
          reject(err);
      });

  });
}

module.exports = {getRxcui: getRxcui, getMultipleInteractions: getMultipleInteractions};
