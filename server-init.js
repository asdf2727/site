const express = require('express');
const app = express();

const port = 8081;
const host = "127.0.0.1";

app.use(express.static('public'));

app.get('/', function (req, res) {
    console.log("Requesting the main page.")
    res.sendFile( __dirname + "/HTML/main.html" );
});
app.get('/courses/:course/', function (req, res) {
    console.log("Requesting the course \'" + req.params.course + "\'.")
    res.sendFile( __dirname + "/HTML/courses/" + req.params.course + "/course.html" );
});
app.get('/courses/:course/:lesson/', function (req, res) {
    console.log("Requesting the lesson \'" + req.params.course + " - " + req.params.lesson + "\'.")
    res.sendFile( __dirname + "/HTML/courses/" + req.params.course + "/lessons/" + req.params.lesson + ".html" );
});

const server = app.listen(port, host, function () {
    console.log("Example app listening at http://" + host + ":" + port)
});
