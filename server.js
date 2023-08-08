const express = require('express');
const path = require("path");
const app = express();
const port = 3000;
let initPath = path.join(__dirname, "public");

app.use(express.static(initPath))

app.get('/', (req, res) => {
    res.sendFile(path.join(initPath, "index.html"))
})
app.get("/404",(req, res) => {
    res.sendFile(path.join(initPath,"404.html"))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})