import axios from 'axios';

const API_URL = '/api';

const helpers = {

    loginUser: ({username, password}) => {
        return new Promise((fufill, reject) => {
            axios
                .post(`${API_URL}/new-user`)
                .then((response) => {
                    if (response) {
                        fulfill(response)
                    } else {
                        reject("rejected")
                    }
                })
        })

    }
}

export default helpers;