import express from 'express';
import http from 'http';
import { Server } from 'socket.io';  // Correct import for server-side socket.io

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Allow connections from any origin (you can restrict this later)
    methods: ['GET', 'POST'],
  },
});

// Set up socket.io connection
io.on('connection', (socket) => {
  console.log(' user connected');

  // Listen for messages from the client
  socket.on('user_message', (msg) => {
    console.log('Received message from client:', msg);
    // Send a response back to the client (simulating an AI response here)
    socket.emit('model_response', { text: `Server received: ${msg}` });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
