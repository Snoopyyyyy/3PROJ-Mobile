const { get } = require('./AxiosService');

exports.getFolder = (id) => {
    return new Promise((resolve, reject) => {
        let uri = id ? `/api/folder/${id}` : '/api/folder'
        get(uri).then(data => {
            resolve(data)
        }).catch(err => reject(err));
    })
}