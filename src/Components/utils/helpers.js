import axios from 'axios';

const API_URL = '/api';

const helpers = {

    newUser: (username, password) => {
        console.log("Hi! Your helper is running");
        return new Promise((resolve, reject) => {
            axios.post(`${API_URL}/signup`, {username: username, password: password})
                .then((response) => {
                    console.log('.then on signup fired');
                    if (response) {
                        resolve(response)
                    } 
                }).catch(err=>{if(err) reject(err)});
        });

    },


    addDrugs: (drugName, id)=> {
        console.log("AddDrugs Helper Called");


    },
    loginUser: (username, password) =>{
        console.log("user login helper running");
        return axios
            .post(`${API_URL}/login`, {username: username, password: password});
    }

}

export default helpers;