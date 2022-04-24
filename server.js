// nodejs server logic code goes here 
const http = require('http');

// file system module to perform file operations
const fs = require('fs');

// import file with logic for generating os data
const os = require('./getOsData')

//declare host and port
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const urlPath = req.url;

    if (urlPath === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        html = fs.readFileSync('./pages/index.html');
        res.end(html);
    } else if (urlPath === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        html = fs.readFileSync('./pages/about.html');
        res.end(html);
    } else if (urlPath === '/sys') {
        res.writeHead(201, {'Content-Type': 'text/plain'});

        // stringify JSON Object
        let jsonContent = JSON.stringify(os.jsonData, null, 2);

        fs.writeFile("osinfo.json", jsonContent, 'utf8', function(err) {
            if (err) {
                return console.log("An error occured", err);
            }
            console.log("JSON file has been saved.");
            res.end('Your OS info has been saved successfully!');
        });

      
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        html = fs.readFileSync('./pages/404.html');
        res.end(html);
    }
});

server.listen(port, host, () => {
    console.log(`Server running at ${host}:${port}`);
});
