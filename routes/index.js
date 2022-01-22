
const authRouter = require('./auth');

module.exports = (app)=>{

    app.use('/auth',authRouter);

    app.get('/',(req,res,next)=>{
        res.status(200).send('Weclome to the home page')
       
        });

    app.get('/user/:id/:postId',(req,res,next)=>{
            console.log(req.params);
            res.status(200).send('Weclome to the user homepage')
        });
};