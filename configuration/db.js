
const { MongoClient } = require('mongodb');
const { UserName,Password,DB}  = require ('./db.config');

//const mongoose = require("mongoose");
const _uri = `mongodb+srv://${UserName}:${Password}@cluster0.2xpfv.mongodb.net/${DB}?retryWrites=true&w=majority`;

// mongoose.connect(_uri,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );
// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });


// async function main(){
//     const client = new MongoClient(_uri);
//     try {
//         await client.connect();
//         await listDatabases(client);
//     } catch (e) {
//         console.error(e);
//     }
//     finally{
//         await client.close();
//     }
// }
// main().catch(console.error);

// async function listDatabases(client){
//    const dbs = await client.db().admin().listDatabases();
//    console.log('databases');
//    dbs.databases.forEach(element => {
//        console.log(` - ${element.name}`);
//    });
// }
const dbCon = (coll,cb) =>{
    MongoClient.connect(_uri)
        .then(async (client) =>{
            const db =  client.db('sample_mflix').collection(coll);
            await cb(db);
            client.close();
        })
        .catch();
};
// dbCon('movies',async(db) =>{
//     const movie = await db.findOne();
//     console.log(movie);
// })

module.exports = dbCon;

