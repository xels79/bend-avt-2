const http = require('http');
const hostname = '0.0.0.0';
const port = 3030;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/http');
    res.end('<html><body><p><b>Hello World</b></p></body></html>');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});