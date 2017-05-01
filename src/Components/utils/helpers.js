import axios from 'axios';

const API_URL = '/api';

const helpers = {

    newUser: (username, password) => {
        console.log("Hi! Your helper is running");
        // return new Promise((resolve, reject) => {
            return axios
                .post(`${API_URL}/signup`, {username: username, password: password});
                // .then((response) => {
                //     console.log('.then on login fired');
                //     if (response) {
                //         resolve(response)
                //     } 
                // }).catch(err=>{if(err) reject(err)});
        // })

    },
    loginUser: (username, password) =>{
        console.log("user login helper running");
        return axios
            .post(`${API_URL}/login`, {username: username, password: password});
    }

}

export default helpers;