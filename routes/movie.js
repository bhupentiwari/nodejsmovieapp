const {Router} = require('express');
const {getMovies,getMovie} = require('../controllers');
const { auth} = require('../middleware');
const router = Router();

router
 .get('/movies/:page',auth,getMovies)
 .get('/movie/:id',getMovie)

module.exports = router;