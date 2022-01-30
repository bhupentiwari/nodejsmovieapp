const http  = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen('8081',()=>{
    console.log('server is listening');
})

// server.on('listening',()=>{
//     console.log('Server is listening now')
// });