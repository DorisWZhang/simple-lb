const axios = require('axios');

const RR_URL = 'http://localhost:8000'; 
const WRR_URL = 'http://localhost:8001';
const NUM_REQUESTS = 10; // number of test requests

async function testLBs() {
    // test Round Robin
    console.log('Testing round robin');
    for (let i = 0; i < NUM_REQUESTS; i++) {
        try {
            const response = await axios.get(RR_URL);
            console.log(`Request ${i + 1}: ${response.data}`);
        } catch (error) {
            console.error(`Request ${i + 1} failed:`, error.message);
        }
    }
    
    // testing Weighted Round Robin
    console.log('Testing weighted round robin');
    for (let i = 0; i < NUM_REQUESTS; i++) {
        try {
            const response = await axios.get(WRR_URL);
            console.log(`Request ${i + 1}: ${response.data}`);
        } catch (error) {
            console.error(`Request ${i + 1} failed:`, error.message);
        }
    }
}

testLBs();
