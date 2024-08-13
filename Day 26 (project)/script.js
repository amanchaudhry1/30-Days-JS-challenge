const ws = new WebSocket('ws://localhost:8080');

const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

ws.onmessage = (event) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = event.data;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
};

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    ws.send(message);
    messageInput.value = '';
});

messageInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
