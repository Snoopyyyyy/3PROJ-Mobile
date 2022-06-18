const { post, put, setToken, get } = require('./AxiosService');
let user = undefined;

exports.login = (email, password) => {
    return new Promise((resolve, reject) => {
        post('/api/auth/login', { email, password }).then(raw_user => {
            setToken(raw_user.token);
            user = raw_user;
            resolve(user.token)
        }).catch(err => console.log(err));
    })
}

exports.register = (firstname, lastname, email, password) => {
    return new Promise((resolve, reject) => {
        post('/api/auth/register', { firstname, lastname, email, password }).then(account => {
            this.login(email, password).then(token => {
                resolve(token);
            }).catch(err => {
                resolve({ err: 'Auto login failed', data: account })
            });
        }).catch(err => console.log(err));
    })
}

exports.logout = () => {
    return new Promise((resolve, reject) => {
        put('/api/auth/logout', {}).then(json => {
            setToken('');
            user = undefined
            resolve(json.message);
        }).catch(err => console.log(err))
    })
}

exports.getUsers = () => {
    return new Promise((resolve, reject) => {
        get('/api/user').then(data => {
            resolve(data);
        }).catch(err => console.log(err))
    })
}

exports.updateUser = (user) => {
    return new Promise((resolve, reject) => {
        put('/api/user/' + user._id, user).then(data => {
            resolve(data);
        }).catch(err => console.log(err))
    })
}

exports.isAdmin = () => {
    return user && user.isAdmin;
}

exports.getUser = () => {
    return user;
}