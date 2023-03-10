// index.js

const { execSync } = require('child_process');
const sendSampleMessage = require('./sendSampleMessage.js');

// Kill any process using port 8081
try {
  console.log('Killing process using port 8081...');
  execSync('npx kill-port 8081');
} catch (error) {
  console.error('Error killing process:', error);
}

// Start the WebSocket server
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 8081 });

wss.on('listening', () => {
  console.log('Server is listening on port 8081');
});

wss.on('connection', (ws) => {
  console.log('New client connected!');

  ws.on('message', (message) => {
    console.log('Message received from client:', message.toString());

    if (message.toString() === 'Data') {
      // const response = 'Here is your data!';
      // ws.send(response);
      ws.send(sendSampleMessage.buildGraphMessage());
    } else if (message.toString() === 'Cursors') {
      console.log(
        'Sending cursor message...',
        sendSampleMessage.sendCursorMessage()
      );
      ws.send(sendSampleMessage.sendCursorMessage());
    } else {
      const response = "Sorry, I don't understand.";
      console.log(`I got the message from client: ${JSON.stringify(response)}`);
      // ws.send(response);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected!');
  });
});
