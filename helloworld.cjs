const express = require('express');
const app = express();
const port = 8000;

const server = app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

app.get("/", (req, res) => {
  console.log("<h1>Hello world!</h1>");
  res.send("Hello world");
});

