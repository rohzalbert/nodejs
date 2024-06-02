const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Send the response body as HTML
  res.end('<h1>Hello Node!!!!</h1>\n');
});

// Listen for incoming requests on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
