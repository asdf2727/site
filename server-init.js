const express = require('express');
const app = express();

const port = 8081;
const host = "127.0.0.1";

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/HTML/index.html" );
});
app.get('/courses/:course/', function (req, res) {
    res.sendFile( __dirname + "/HTML/courses/" + req.params.course + "/course.html" );
});
app.get('/courses/:course/:lesson/', function (req, res) {
    res.sendFile( __dirname + "/HTML/courses/" + req.params.course + "/" + req.params.lesson + ".html" );
});

const server = app.listen(port, host, function () {
    console.log("Example app listening at http://" + host + ":" + port)
});