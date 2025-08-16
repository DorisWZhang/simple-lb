const http = require('http');

const httpProxy = require('http-proxy');

const servers = require('./servers.json').servers;

const proxy = httpProxy.createProxyServer({});

let currentIndex = 0;
let currentWeight = 0; 

const lb = http.createServer((req,res) => {
    let targetServer = servers[currentIndex];
    // Check if current server can handle more requests
    if (currentWeight >= targetServer.weight) {
        // Move to next server
        currentIndex = (currentIndex + 1) % servers.length;
        currentWeight = 0;
        targetServer = servers[currentIndex];
    }
    // increment weight to account for this request
    currentWeight++;
    
    // send request to the correct server
    proxy.web(req, res, {
        target: `http://${targetServer.name}:${targetServer.port}`
    });
    
    console.log(`Request sent to ${targetServer.name}:${targetServer.port} (weight: ${targetServer.weight}, current: ${currentWeight})`);
});

lb.listen(8001, () => {
    console.log('Weighted Round Robin Load Balancer running on port 8001');
    console.log('Server weights:', servers.map(s => `${s.name}:${s.port} (weight: ${s.weight})`));
});