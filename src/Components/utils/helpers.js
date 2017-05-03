import axios from 'axios';
var interactions = require('./../../../server/routes/api');

const API_URL = '/api';

const helpers = {

  newUser: (username, password) => {
    console.log("Hi! Your helper is running");
    return new Promise((resolve, reject) => {
      axios.post(`${API_URL}/signup`, {
        username: username,
        password: password
      }).then((response) => {
        console.log('.then on signup fired');
        if (response) {
          resolve(response)
        }
      }).catch(err => {
        if (err) {
          console.log('.catch on login fired.');
          reject(err);
        }
      });
    });

  },

  loginUser: (username, password) => {
    console.log("user login helper running");
    return new Promise((resolve, reject) => {
      axios.post(`${API_URL}/login`, {
        username: username,
        password: password
      }).then(response => {
        console.log('.then on signup fired');
        if (response) {
          resolve(response)
        }
      }).catch(err => {
        if (err) {
          console.log('.catch on signup fired');
          reject(err);
        }
      });
    });
  },

  addMeds: (drugName, id) => {
    console.log("AddDrugs Helper Called");
    return new Promise((resolve, reject) => {

      interactions.getRxcui(drugName).then(rxcui => {
        const medication = {
          name: drugName,
          rxcui: rxcui
        }

        axios.post(`${API_URL}/add/meds/${id}`, {medication: medication}).then(response => {
          console.log('.then on posting addMeds fired');
          if (response) {
            resolve(response)
          }
        }).catch(err => {
          if (err) {
            console.log('.catch on posting addMeds fired');
            reject(err);
          }
        });

      }).catch(err => {
        if (err) {
          console.log('.catch on getRxcui fired');
          reject(err);
        }
      })
    });
  },

  checkInteractions: drugList => {
    return new Promise((resolve, reject)=>{

      interactions.getMultipleInteractions(drugList).then(data=>{
        console.log('.then on getMultipleInteractions fired.');
        resolve(data);
      }).catch(err=>{
        if(err){
          console.log('.catch on getMultipleInteractions fired.');
          reject(err);
        }
      });

    });
  } 

}

export default helpers;
