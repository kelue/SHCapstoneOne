const http = require('http');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const host = '127.0.0.1';
const port = 3000;


app.get('/', function(req, res) {
    res.render('index');
})

app.get('/about', function(req, res) {
    res.render('about');
})

app.get('*', function(req, res) {
    res.render('404');
})

app.listen(port, function(err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});