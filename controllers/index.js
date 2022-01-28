const {getLogin } = require('./auth/login');
const {getMovies,getMovie} = require('./movieController');
const { postSignup } = require('./auth/signup');

module.exports = {
    getLogin,
    getMovies,
    getMovie,
    postSignup
}
