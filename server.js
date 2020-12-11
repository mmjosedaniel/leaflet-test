const http = require('http');
const fs = require('fs');

const PORT = 8080;

fs.readFile('./index.html', (err, html) => {

    if (err) throw err;

    http.createServer((request, response) => {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(PORT);
});
