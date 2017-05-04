import axios from 'axios';
var interactions = require('./../../../server/routes/api');

const API_URL = '/api';

const helpers = {

  newUser: (username, password) => {
    console.log("signup helper is running");
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
          console.log('.catch on signup fired.');
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
        console.log('.then on login fired');
        if (response) {
          resolve(response)
        }
      }).catch(err => {
        if (err) {
          console.log('.catch on login fired');
          reject(err);
        }
      });
    });
  },

  getMedsList: drugName => {
    console.log("getMedsList helper Called");
    return new Promise((resolve, reject) => {
      interactions.getMedsList(drugName).then(medsList => {
        
        console.log('.then on getMedsList fired');
        resolve(medsList);

      }).catch(err => {
        //handle error
        if (err) {
          console.log('.catch on getMeds fired');
          reject(err);
        }
      })

    });
  },

  addMeds: (medication, id) => {
    console.log('addMeds helper called');
    return new Promise((resolve, reject)=> {

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

      
    });
  },

  deleteMeds: (medication, id)=> {
    console.log('deleteMeds helper called');
    return new Promise((resolve, reject)=> {

      axios.delete(`${API_URL}/delete/meds/${id}`, {medication: medication}).then(response => {
        console.log('.then on delete deletemeds fired');
        if (response) {
          resolve(response)
        }
      }).catch(err => {
        if (err) {
          console.log('.catch on delete deleteMeds fired');
          reject(err);
        }
      });

      
    });

  },

  checkInteractions: drugList => {
    console.log('checkInteractions helper called');
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
