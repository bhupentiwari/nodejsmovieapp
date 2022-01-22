const express = require('express');
const app = express();

//send
//status
//json
//redirect

// app.get('/',(req,res,next)=>{
// res.status(200).send('Weclome to the home page')
// res.json({
//     message : "Welcome to the home page"
// });
// });

app.get('/',(req,res,next)=>{
    res.redirect('/user');
    });

    
app.get('/user',(req,res,next)=>{
    res.status(200).send('Weclome to the user home page')
})
module.exports = app;