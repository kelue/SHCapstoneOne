// Creating our server
const fs = require('fs');
const http = require('http');
const { hostname, platform, networkInterfaces, cpus, arch } = require('os');
const { uptime } = require('process');

const server = http.createServer((req, res) => {

    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(fs.readFileSync('./pages/index.html'))
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(fs.readFileSync('./pages/about.html'));
        res.end();
    } else if (req.url === '/sys') {
        const info = {
            "hostname": hostname(),
            "platform":platform(),
            "architecture":arch(),
            "numberOfCPUS":cpus(),
            "networkInterface": networkInterfaces(),
            "uptime":uptime(),
        }
        //console.log(info);
        //const jsonInfo = JSON.parse(info);
        const osInfo = JSON.stringify(info)
        console.log(osInfo);
        res.writeHead(201, {'Content-Type': 'text/plain'})
        res.write("Your OS info has been saved successfully")
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write(fs.readFileSync('./pages/404.html'));
        res.end();
    }
})

server.listen('3030', hostname =>{
    console.log('Server is working....');
});



// to do 

// nodejs server logic code goes here 