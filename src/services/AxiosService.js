const axios = require('axios');
const baseUrl = "http://localhost:3001";
const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
}
let tokenState;

exports.setTokenState = (setToken) => {
    tokenState = setToken;
}

exports.setToken = (token) => {
    let new_token = token !== 'null' ? token : ''
    // tokenState(new_token)
    headers['Authorization'] = new_token;
}

exports.getToken = () => {
    return headers['Authorization'];
}

exports.get = (uri) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}${uri}`, { headers }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.response.data))
    })
}

exports.post = (uri, body) => {
    return new Promise((resolve, reject) => {
        axios.post(`${baseUrl}${uri}`, body, { headers }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.response.data))
    })
}

exports.put = (uri, body) => {
    return new Promise((resolve, reject) => {
        axios.put(`${baseUrl}${uri}`, { body }, { headers }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.response.data))
    })
}

exports.delete = (uri) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${baseUrl}${uri}`, { headers }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.response.data))
    })
}

