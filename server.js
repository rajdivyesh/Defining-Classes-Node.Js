const WebSocket = require('ws')
const {createWebSocketStream} = require("ws");
const server = new WebSocket.Server({port:8087})

/*
the "=>" symbol is used to define arrow functions. Arrow functions are a concise way to write functions in JS and were introduce in ECMAScript.

*/
server.on('connection', (socket) => {
    console.log('A new client connected')

    // now let's handle the incoming message from the client
    socket.on('message', (message) =>{
        console.log(`Recieved: ${message}`)

        //now we broadcast the message to all the connected clients
        server.clients.forEach((client) =>{
            if (client !== socket && client.readyState === WebSocket.OPEN){
                client.send(message)
            }
        })
    })
    //here we handle the client disconnection
    socket.on('close', () =>{
        console.log('A client disconnected')
    })
})