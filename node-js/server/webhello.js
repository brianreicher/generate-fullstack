#!/usr/bin/env node

// set port num or use default:3000, use http library
const
  port = (process.argv[2] || process.env.PORT || 3000),
  http = require('http');
  dt = require('../console-app/node-src.js');

http.createServer((req, res) => {
    console.log(req.url);

    res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<h1> Server Init Page</h1>
               <p> The date and time are currently ${dt.myDateTime()}</p>`);
    res.end();
    }).listen(port);

console.log(`Server running at http://localhost:${ port }/`);
