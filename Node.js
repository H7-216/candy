const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

let clients = {};

server.on('connection', (ws, req) => {
    const clientIP = req.socket.remoteAddress;
    clients[clientIP] = ws;

    console.log(`Client connected: ${clientIP}`);

    ws.on('message', (message) => {
        const data = JSON.parse(message); // Message format: { targetIP, content }
        const targetClient = clients[data.targetIP];
        if (targetClient && targetClient.readyState === WebSocket.OPEN) {
            targetClient.send(`Message from ${clientIP}: ${data.content}`);
        } else {
            ws.send(`Cannot find client with IP: ${data.targetIP}`);
        }
    });

    ws.on('close', () => {
        delete clients[clientIP];
        console.log(`Client disconnected: ${clientIP}`);
    });
});

console.log('WebSocket server running on ws://localhost:8080');