const express = require('express');
const app = express();

//send
//status
//json
//redirect

app.use((req,res,next)=>{
console.log(req.ip);
next();
});

app.get('/',(req,res,next)=>{
res.status(200).send('Weclome to the home page')
// res.json({
//     message : "Welcome to the home page"
// });
});

// app.get('/',(req,res,next)=>{
//     res.redirect('/user');
//     });

    
app.get('/user/:id/:postId',(req,res,next)=>{
    console.log(req.params);
    res.status(200).send('Weclome to the user homepage')
})
module.exports = app;