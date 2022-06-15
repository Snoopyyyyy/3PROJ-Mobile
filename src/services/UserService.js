const { post, put, setToken, get } = require('./AxiosService');
let user = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : undefined;

exports.login = (email, password) => {
    return new Promise((resolve, reject) => {
        post('/api/auth/login', { email, password }).then(raw_user => {
            setToken(raw_user.token);
            user = raw_user;
            sessionStorage.setItem('user', JSON.stringify(user));
            resolve(user.token)
        }).catch(err => reject(err.message));
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
        }).catch(err => reject(err.message));
    })
}

exports.logout = () => {
    return new Promise((resolve, reject) => {
        put('/api/auth/logout', {}).then(json => {
            setToken('');
            user = undefined
            sessionStorage.removeItem('user');
            resolve(json.message);
        }).catch(err => reject(err.message))
    })
}

exports.isAdmin = () => {
    return user && user.isAdmin;
}

exports.getUser = () => {
    return user;
}