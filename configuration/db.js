
const { MongoClient } = require('mongodb');
const { UserName,Password,DB}  = require ('./db.config');

//const mongoose = require("mongoose");
const _uri = `mongodb+srv://${UserName}:${Password}@cluster0.2xpfv.mongodb.net/${DB}?retryWrites=true&w=majority`;

const dbCon = (coll,cb) =>{
    MongoClient.connect(_uri)
        .then(async (client) =>{
            const db =  client.db('sample_mflix').collection(coll);
            await cb(db);
            client.close();
        })
};


module.exports = dbCon;

