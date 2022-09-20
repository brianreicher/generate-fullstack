#!/usr/bin/env node

// set port num or use default:3000
const
  port = (process.argv[2] || process.env.PORT || 3000),
  http = require('http');

  http.createServer((req, res) => {
    console.log(req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<p> Server Init Page</p>`);
  }).listen(port);

console.log(`Server running at http://localhost:${ port }/`);
