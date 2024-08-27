const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to AWS tutorial by Shivam Bhadani");
})

app.get("/product", (req, res) => {
  res.send("This is Product Page");
})

app.get("/health", (req, res) => {
  res.send("Everything is OK");
})

app.listen(8080, () => console.log("Sever is listening on Port 8080"))