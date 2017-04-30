import axios from 'axios';

const API_URL = '/api';

const helpers = {

    loginUser: (username, password) => {
        console.log("Hi! Your helper is running");
        // return new Promise((resolve, reject) => {
            return axios
                .post(`${API_URL}/login`, {username: username, password: password});
                // .then((response) => {
                //     console.log('.then on login fired');
                //     if (response) {
                //         resolve(response)
                //     } 
                // }).catch(err=>{if(err) reject(err)});
        // })

    },

    addDrugs: (drugName, id)=> {
        console.log("AddDrugs Helper Called");


    }
}

export default helpers;