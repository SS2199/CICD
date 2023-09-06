import express from "express";

const app = express();
const port = 4500;

app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});

app.get("/hello", (req, res) => {
    console.log("Hello world");
    res.send("Hello, World!"); // Send a response to the client
});
