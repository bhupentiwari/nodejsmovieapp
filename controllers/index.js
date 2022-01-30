const {postLogin} = require('./auth/login');
const {getMovies,getMovie} = require('./movieController');
const { postSignup } = require('./auth/signup');

module.exports = {
    getMovies,
    getMovie,
    postSignup,
    postLogin
}
