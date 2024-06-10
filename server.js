const PORT = process.env.PORT || 8080;
const http = require("http");
const httpProxy = require("http-proxy");
var express  = require('express');
var app = express();

apiProxy = httpProxy.createProxyServer();

app.get("/", (req, res) => {
    const {url} = req.query;
    apiProxy.web(req, res, {target: url});
});


app.listen(PORT);
console.log(`Proxy running on port ${PORT}`);