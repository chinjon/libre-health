var axios = require('axios');

function getMedsList(drug) {

  return new Promise(function (resolve, reject) {

    var queryUrl = 'https://rxnav.nlm.nih.gov/REST/drugs.json?name=' + drug;

    axios.get(queryUrl).then(function(response){

      var conceptGroup = response.data.drugGroup.conceptGroup;

      var medsArray = [];

      conceptGroup.forEach(function(e){
        var medsList = e.conceptProperties;

        if(medsList) {
          medsList.forEach(function(e){
            var length = 60; //we should consider increasing this and making the search form larger
            var name = e.name.substring(0,length);
            medsArray.push({rxcui: e.rxcui, name: name})
          });
        }
      });

      medsArray.sort(function(a, b) { return a.name - b.name;});

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

        //parsing the data and reducing it 
        var interactionTypeArray = response.data.fullInteractionTypeGroup;

        var interactionPairs = [];

        interactionTypeArray.forEach(function(e){
        
          var innerInteractionTypeArray = e.fullInteractionType;
        
          innerInteractionTypeArray.forEach(function(e){
            
            interactionPairs.push(e.interactionPair);
          })
        });

        //reduce data into an object
        var interactionObj = interactionPairs.reduce(function(obj, pair){
        
          for (var i=0; i<pair.length; i++) {
            var drug1 = pair[i].interactionConcept[0].minConceptItem.name;
            var drug2 = pair[i].interactionConcept[1].minConceptItem.name;
            //initialize array if this key does not exist on obj
            if(!obj[drug1]) {
              obj[drug1] = [];
            }
            if(!obj[drug2]) {
              obj[drug2] = [];
            }
            
            function duplicateInteraction(arr, drug2) {
              for(var j=1; j < arr.length; j++) {
                if(arr[j].interactionName == drug2) && arr[j].severity == pair[i].severity) {
                  return true;
                }
              }
              return false;
            }

            if(!duplicateInteraction(obj[drug1], drug2)) {
              obj[drug1].push({interactionName: drug2, severity: pair[i].severity, description: pair[i].description});
            }

            if(!duplicateInteraction(obj[drug2], drug1)) {
              obj[drug2].push({interactionName: drug1, severity: pair[i].severity, description: pair[i].description});
            }

          }
          return obj;

        }, {});
        //convert into an array
        var keys = Object.keys(interactionObj);

        var interactionList = keys.map(function(drug) {
          return {drugName: drug, interactions: interactionObj[drug]}
        });

        resolve(interactionList);

      }).catch(function (err) {
        if (err)
          reject(err);
      });

  });
}

module.exports = {getMedsList: getMedsList, getMultipleInteractions: getMultipleInteractions};
