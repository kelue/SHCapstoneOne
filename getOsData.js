const os = require('os');

function toHours(d) { //this function converts the seconds stored in the uptime variable to readable format
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}
 
 
 // json data
 const hostName = os.hostname();
 const platform = os.platform();
 const architecture = os.arch();
 const numberOfCPUS = os.cpus();
 const networkInterfaces = os.networkInterfaces();
 const uptime = os.uptime();

const jsonData = {
 "hostname": hostName,
 "platform": platform,
 "architecture": architecture,
 "numberOfCPUS": numberOfCPUS.length,
 "networkInterfaces": networkInterfaces,
 "uptime" : toHours(uptime)
 };

 module.exports = { jsonData }