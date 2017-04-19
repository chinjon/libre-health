var axios = require('axios');
var fs = require('fs');

	function getRxcui(drug){
	
	
		return new Promise((resolve, reject)=>{

			axios.get(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${drug}`).then(response=>{
				// console.log(response.data.drugGroup.conceptGroup[1].conceptProperties[0].rxcui);
				// resolve(response.data.drugGroup.conceptGroup[1].conceptProperties[0].rxcui);

				var conceptGroup = response.data.drugGroup.conceptGroup;

				var SBD = conceptGroup.filter(e=> {return e.tty == 'SBD'});

				var dosage = SBD[0].conceptProperties.find((e)=>e.name.includes(process.argv[3]));
				console.log(dosage);
				//we can filter SBD on dosage or brand-name

				resolve(dosage.rxcui);
				
			}).catch((err)=>{if(err){reject(err)}});

		});

	}


	function getInteractions(drug) {

		getRxcui(drug).then((rxcui)=>{


			axios.get(`https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}&sources=DrugBank`)
			.then(response=>{
				// console.log(response.data);
				var pairsArray = response.data.interactionTypeGroup[0].interactionType[0].interactionPair;

				var newArray = pairsArray.map((e)=>{

					var name = e.interactionConcept[1].sourceConceptItem.name
					var severity = e.severity
					var description = e.description

					return {name, severity, description};
				});

				fs.writeFileSync('interactionMapped.json', JSON.stringify(newArray), 'utf-8');
			
			}).catch((err)=>{if(err)console.log(err)});

		});
	}

getInteractions(process.argv[2]);
