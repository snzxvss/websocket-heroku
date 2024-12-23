import WebSocket from 'ws';
import readline from 'readline';

const ws = new WebSocket('ws://localhost:8080');

let lastMessageLength = 0;

ws.on('message', (data) => {
  console.log(`Recibido: ${data}`);
  rl.prompt();
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.prompt();

rl.on('line', (input) => {
  ws.send(input);
  rl.prompt();
});