const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Server B');
});

server.listen(3001, () => {
    console.log('Server B is running on port 3001');
});

