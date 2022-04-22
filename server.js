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
        res.setHeader('Content-type', 'text/plain');
        // file system module to perform file operations
        const fs = require('fs');
        const os = require('os');

        // json data
        const hostName = os.hostname();
        const platform = os.platform();
        const jsonData = `{
        "hostname": "${hostName}",
        "platform": "${platform}"
    }`;

        // parse json
        const jsonObj = JSON.parse(jsonData);
        console.log(jsonObj);

        // stringify JSON Object
        var jsonContent = JSON.stringify(jsonObj);
        console.log(jsonContent);

        fs.writeFile("output.json", jsonContent, 'utf8', function(err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }

            console.log("JSON file has been saved.");
            res.end('Your OS info has been saved successfully!');
        });
    } else {
        res.statusCode = 400;
    }
});

server.listen(port, host, () => {
    console.log(`Server running at ${ host }: ${ port }`);
});