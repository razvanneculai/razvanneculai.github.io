const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/data') {
    let data = '';

    req.on('data', chunk => {
      data += chunk;
    });

    req.on('end', () => {
      const { temperature, humidity } = JSON.parse(data);
      console.log('Received temperature:', temperature);
      console.log('Received humidity:', humidity);

      // Perform any additional processing or data storage here

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Data received');
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Endpoint not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
