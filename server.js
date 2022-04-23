// nodejs server logic code goes here 
const http = require('http');

// file system module to perform file operations
const fs = require('fs');
const os = require('os');


const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const urlPath = req.url;

    if (urlPath === '/') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        html = fs.readFileSync('./pages/index.html');
        res.end(html);
    } else if (urlPath === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        html = fs.readFileSync('./pages/about.html');
        res.end(html);
    } else if (urlPath === '/sys') {
        res.statusCode = 201;
        res.setHeader('Content-type', 'text/plain');

        // json data
        const hostName = os.hostname();
        const platform = os.platform();
        const architecture = os.arch();
        const numberOfCPUS = os.cpus();
        const networkInterfaces = os.networkInterfaces();
        const uptime = os.uptime();

        const jsonData = `{
        "hostname": "${hostName}",
        "platform": "${platform}",
        "architecture": "${architecture}",
        "numberOfCPUS": "${numberOfCPUS.length}",
        "networkInterfaces": "${networkInterfaces.length}",
        "uptime" : "${uptime}"
        }`;

        // parse json
        const jsonObj = JSON.parse(jsonData);
        console.log(jsonObj);

        // stringify JSON Object
        var jsonContent = JSON.stringify(jsonObj, null, 2);
        console.log(jsonContent);

        fs.writeFile("osinfo.json", jsonContent, 'utf8', function(err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }

            console.log("JSON file has been saved.");
            res.end('Your OS info has been saved successfully!');
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-type', 'text/html');
        html = fs.readFileSync('./pages/404.html');
        res.end(html);
    }
});

server.listen(port, host, () => {
    console.log(`Server running at ${ host }: ${ port }`);
});