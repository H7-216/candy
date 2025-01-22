// Install WebSocket package with `npm install ws`
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

let clients = [];

server.on('connection', (ws) => {
    clients.push(ws);

    ws.on('message', (message) => {
        // Broadcast the message to all connected clients
        clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        clients = clients.filter((client) => client !== ws);
    });
});

console.log('WebSocket server is running on ws://localhost:8080');