Simple HTTP load-balancers built in Node.js using http and http-proxy libraries.

It supports multiple load balancing strategies for distributing requests to backend servers:
<ul>
  <li>Round Robin – evenly rotates requests across servers.</li>
  <li>Weighted Round Robin – servers with higher weights receive more requests.</li>
  <li>Least Connections – sends requests to the server with the fewest active connections.</li>
</ul>
  

