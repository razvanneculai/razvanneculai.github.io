// Import required libraries
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    // Handle POST requests
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      // Process the received data
      const data = JSON.parse(body);
      console.log('Received data:', data);

      // Update your website with the received data
      // ...

      // Send a response back to the ESP8266
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Data received successfully');
    });
  } else {
    // Handle other requests
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid endpoint');
  }
});

// Set the port number for the server to listen on
const port = process.env.PORT || 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
