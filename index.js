import { WebSocketServer } from 'ws';
import http from 'http';

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Servidor WebSocket está funcionando.\n');
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        if (message === 'clear') {
            wss.clients.forEach((client) => {
                if (client.readyState === client.OPEN) {
                    client.send('clear');
                }
            });
        } else {
            wss.clients.forEach((client) => {
                if (client.readyState === client.OPEN) {
                    client.send(message);
                }
            });
        }
    });
});

server.listen(PORT, () => {
    console.log(`Servidor WebSocket ejecutándose en wss://${process.env.HEROKU_APP_NAME || 'your-app-name'}.herokuapp.com`);
});