const express = require("express");
const app = express();
const port = 3000; // You can use any port you prefer

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});