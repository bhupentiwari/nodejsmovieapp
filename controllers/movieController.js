const { dbCon } = require('../configuration');
const { ObjectId } = require('bson');
const createError = require('http-errors');

const getMovies = (req, res, next) => {
    console.log('get movies is called');
    const pageNum = parseInt(req.params.page);
    if (isNaN(pageNum)) {
        //return res.status(400).send('bad request');
        return next(createError(400));

    }
    const moviesToSkip = (pageNum - 1) * 10;
    try {
        dbCon('movies', async (db) => {
            const movies = await db.find().skip(moviesToSkip).limit(pageNum).toArray();
            res.json(movies);

        })
    } catch (error) {
        return next(createError(500));
        //return res.status(500).send('Internal server error');
    }

}
const getMovie = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {
        return next(createError(400));
        //return res.status(400).send('movie id not valid');
    }
    const _id = new ObjectId(req.params.id);
    try {
        dbCon('movies', async (db) => {
            const movie = await db.findOne({ "_id": _id });
            if (!movie) {
                return next(createError(400));
                //return res.status(400).send('movie not found');
            }
            res.json(movie);
        })
    } catch (error) {
        return next(createError(500));
        //return res.status(500).send('Internal server error');
    }

}
module.exports = {
    getMovies,
    getMovie
}