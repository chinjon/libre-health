import axios from 'axios';

const API_URL = '/api';

const helpers = {

    loginUser: ({username, password})=>{
     return axios.post(`${API_URL}/user`, {
// need to refer to this.state.username + this.state.password
            username,
            password
        })
        .then(function(response){
            console.log(response)
        })
        .then(function(error){
            console.log(error)
        });
    }
}

export default helpers;