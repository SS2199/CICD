import express from "express";
const app = express();
const port = 8000;

const server = app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

app.get("/", (req, res) => {
  console.log("Hello world");
  res.send("Hello world");
});

export default server; 
