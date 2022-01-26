const { dbCon } = require('../configuration');


const getMovies = (req,res,next) =>{
    //console.log('get movies is called');
    const pageNum = parseInt(req.params.page);
    //console.log(pageNum);
    if(isNaN(pageNum)){
        return res.status(400).send('bad request');
    }
    const moviesToSkip = (pageNum - 1)*10;
    dbCon('movies',async(db) =>{
        const movie = await db.find().skip(moviesToSkip).limit(10).toArray();
        //console.log(movie);
        res.json(movie);
       
    })
}
module.exports = {
    getMovies
}