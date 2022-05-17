const express = require("express");
const app = express();

const port = 3000;
app.get('/', (req, res) {
    console.log("Oh hey! I got a request. Let me respond with ssomething");
    req.send("Hello")
})
app.get("/greeting/:name", (req, res) => {
    console.log(req.params);
    res.send("Whats up" + req.params.name);
});

app.listen(3000, () => {
    console.log("Express is listening for request from the browser")
});


