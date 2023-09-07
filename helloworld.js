const express = require("express");
const app = express();
const port = 4500;

const server = app.listen(port, async () => {
  console.log(`Server running at port: ${port}`);
});

app.get("/hello", (req, res) => {
  console.log("Hello world");
  res.send("Hello world");
});

module.exports = server;
