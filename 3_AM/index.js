const express = require("express");
const path = require('path');
const app = express();
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/grains_used", (req, res) => {
  res.sendFile(path.join(__dirname + '/grains_used.html'));
})

app.get("/bread_types", (req, res) => {
  res.sendFile(path.join(__dirname + '/bread_types.html'));
})

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + '/contact.html'));
})

app.listen(3000);
console.log("Running at port 3000");
