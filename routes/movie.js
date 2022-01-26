const {Router} = require('express');
const {getMovies,getMovie} = require('../controllers');

const router = Router();

router
 .get('/movies/:page',getMovies)
 .get('/movie/:id',getMovie)

module.exports = router;