import WebSocket from 'ws';
import readline from 'readline';

const ws = new WebSocket('wss://websoc-f13286b693d6.herokuapp.com/');

ws.on('open', () => {
    console.log('Conectado al servidor WebSocket');
    rl.prompt();
});

ws.on('message', (data) => {
    if (data === 'clear') {
        console.log('\n'.repeat(10));
    } else {
        console.log(`Recibido: ${data}`);
    }
    rl.prompt();
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

rl.prompt();

rl.on('line', (input) => {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(input);
    } else {
        console.log('WebSocket no está conectado.');
    }
    rl.prompt();
});