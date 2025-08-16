const http = require('http');

const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const servers = require('./servers.json').servers;

let currentIndex = 0;

const lb = http.createServer((req, res) => {
    const targetServer = servers[currentIndex];
    currentIndex = (currentIndex + 1) % servers.length;

    console.log(`Forwarding request to ${targetServer.name}:${targetServer.port}`);
    
    // sent request
    proxy.web(req, res, {
        target: `http://${targetServer.name}:${targetServer.port}`
    })
});

lb.listen(8000, () => {
    console.log('Round RobinLoad Balancer is running on port 8000');
})