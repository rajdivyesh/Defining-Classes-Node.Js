const chatDiv = document.getElementById('chat')
const messageInput = document.getElementById('messageInput')
const sendButton = document.getElementById('sendButton')
const ws = new WebSocket('ws://localhost:8087') // this is the url address for the server


// now we write a function to append a message to the chat window
function appendMessage(message){
    const p = document.createElement('p')
    p.textContent = message
    chatDiv.appendChild(p)
}


function sendMessage(){
    const message = messageInput.value
    if (message.trim() !==''){
        ws.send(message)
        messageInput.value = ''
    }
}

// handle the incoming message from the server
ws.addEventListener('message', (event) => {
    const message = event.data
    appendMessage(message)
})

// handle button click event to send a message
sendButton.addEventListener('click', sendMessage)

// here we handle the enter key press in the message input field
messageInput.addEventListener('keydown', (event) =>{
    event.preventDefault() // this prevents line break in the input field
    sendMessage()
})