const {getLogin } = require('./auth/login');
const {getMovies,getMovie} = require('./movieController');
module.exports = {
    getLogin,
    getMovies,
    getMovie
}
