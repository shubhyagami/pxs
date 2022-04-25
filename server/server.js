const res = require('express/lib/response');
const http=require('http');
const app =require('express')();
const port=5000;
const server=http.createServer(app);
 
server.listen(port,(req,res)=>{
    console.log("server is listening on port "+port)
});