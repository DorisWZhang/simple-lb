const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Server A');
});

server.listen(3000, () => {
    console.log('Server A is running on port 3000');
});


