const PORT = process.env.PORT || 8080;
// const http = require("http");
const httpProxy = require("http-proxy");
const rateLimitMiddleware = require("./middlewares/ratelimit");

var express  = require('express');
var app = express();
// app.use(rateLimitMiddleware);

apiProxy = httpProxy.createProxyServer();
app.get('/',(req, res) => {res.sendFile(__dirname + '/index.html');});

app.get("/proxy/", rateLimitMiddleware, async (req, res) => {
    const {url} = req.query;

    // console.log(url);
    await fetch(url)
    .then(response => {
        if (!response.ok) {throw new Error('Network response was not ok');}
        return response.json();
    })
    .then(data => {
        console.log('Data received');
        res.send(data);
    })
});


app.listen(PORT);
console.log(`Proxy running on port ${PORT}`);