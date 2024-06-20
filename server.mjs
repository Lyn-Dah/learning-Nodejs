import { createServer } from 'node:http';

// Define request handller

// create HTTP Server
const Server = createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('We have an HTTP Server');
});


// Listen for incoming request
Server.listen(3000, '127.0.0.1', function() {
console.log( 'Server is running');
});

// Normal function vs Arrow Function
function handleRequest() {}
const handleRequest = () => {}