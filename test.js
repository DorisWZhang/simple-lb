const axios = require('axios');

const LB_URL = 'http://localhost:8001'; // change this to your load balancer's URL
const NUM_REQUESTS = 10; // number of test requests

async function testLB() {
  for (let i = 0; i < NUM_REQUESTS; i++) {
    try {
        const response = await axios.get(LB_URL);
        console.log(`Request ${i + 1}: ${response.data}`);
      } catch (error) {
        console.error(`Request ${i + 1} failed:`, error.message);
      }
  }
}

testLB();
