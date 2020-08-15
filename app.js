const express = require("express");
const app = express()
const port = process.env.port || 5000

app.get('/', (req, res) => {
    var text = "Test string"
    res.send(text)
})

app.listen(port, () => {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
})