const port = 4500;

const app = express();

const server = app.listen(port, async () => {
  console.log(`Server running at port: ${port}`);
});

app.get("/hello", (req, res) => {
  console.log("Hello world");
  res.send("Hello world");
});

module.exports = server; // Export the server for testing
