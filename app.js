const express = require("express");
const app = express()
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';


app.get('/', (req, res) => {
    var text = "Test string"
    res.send(text)
})

app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});