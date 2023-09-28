const WebSocket = require('ws')
const {createWebSocketStream} = require("ws");
const server = new WebSocket.Server({port:8087});

/*
the '=>' symbol is used to define arrow functions. Arrow functions are a concise way to write functions in JS
and were introduced in ECMAScript. They have a more compact syntax compared to traditional function declaration

eg.

(parameters) => {
    // body of the function
}

 Notes: 1. parameters are the inputs or arguments that the function accpets.
        2. => the arrow opeator seprateas the parameters from the function body
        3. {} enclose the functin body, which contains the code to be executed.
* */

server.on('connection', (socket) => {
    console.log('A new client connected')

    // now let's handle the incoming messages from the client
    socket.on('message', (message) =>{
        console.log(`Received: ${message}`)

        // now we broadcast the message to all the connected clients
        server.clients.forEach((client) =>{
            if (client !== socket && client.readyState === WebSocket.OPEN){
                client.send(message)
            }
        })
    })
    // here we handle the client disconnnection
    socket.on('close', () =>{
        console.log('A client disconnected')
    })
})