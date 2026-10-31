const jsonServer = require('json-server') // import statement
const server = jsonServer.create() // server creation
const router = jsonServer.router('db.json') // set up router, it should run the server
const middleware = jsonServer.defaults() // parse json data before node process. use middleware in node js
const PORT = 3000 // create port number to run in server
server.use(middleware) // use json middleware in server app
server.use(router) // use router in server app

server.listen(PORT,()=>{
    console.log("Json server started");
    
})