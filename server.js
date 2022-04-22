const http = require('http');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const urlPath = req.url;

    if (urlPath === '/') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.end('pages/index.html');
    } else if (urlPath === '/about') {

    } else if (urlPath === '/sys') {

    } else {
        res.statusCode = 400;
    }
});

server.listen(port, host, () => {
    console.log(`Server running at ${host}:${port}`);
});