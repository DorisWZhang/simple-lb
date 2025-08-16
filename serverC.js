const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Server C');
});

server.listen(3002, () => {
    console.log('Server C is running on port 3002');
});

