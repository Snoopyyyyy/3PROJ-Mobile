const { get, post, getBaseUri, getToken, } = require('./AxiosService');
const axios = require("axios");

function getFolder(id) {
    return new Promise((resolve, reject) => {
        let uri = id ? `/api/folder/${id}` : '/api/folder'
        get(uri).then(data => {
            resolve(data)
        }).catch(err => reject(err));
    })
}

exports.getFolder = getFolder;

exports.createFolder = (folder, name) => {
    return new Promise((resolve, reject) => {
        post('/api/folder/' + folder._id, { name }).then(data => {
            resolve(data)
        }).catch(err => reject(err))
    })
}

exports.uploadFile = (files, file_id) => {
    return new Promise((resolve, reject) => {
        let formData = new FormData();
        formData.append('upload', files)
        axios.post(getBaseUri() + '/api/file/' + file_id, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": getToken()
            },
        }).then(res => {
            resolve(res.data)
        }).catch(err => reject(err));
    })

}

exports.getPath = (folder) => {
    return new Promise((resolve, reject) => {
        getPathRec(folder, "/", (err, path) => {
            if (err) {
                reject(err)
            } else {
                resolve(path)
            }
        })

        function getPathRec(folder, path, callback) {
            if (folder.parent.isRoot) return callback(undefined, path);
            path = folder.parent.name + path;
            getFolder(folder.parent.parent).then(fol => {
                getPathRec(fol, '/' + path, callback);
            }).catch(err => callback(err))
        }
    })
}

exports.getUserDrive = (userId) => {
    return new Promise((resolve, reject) => {
        get(`/api/admin/folder/${userId}`).then(data => {
            resolve(data)
        }).catch(err => reject(err));
    })
}

exports.getUserFolder = (userId, folderId) => {
    return new Promise((resolve, reject) => {
        get(`/api/admin/folder/${userId}/${folderId}`).then(data => {
            resolve(data)
        }).catch(err => reject(err))
    })
}

exports.downloadFile = (fileId) => {
    return new Promise((resolve, reject) => {
        get('/api/download/file/' + fileId).then(data => {
            resolve(data);
        }).catch(err => reject(err))
    })
}