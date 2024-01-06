const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
dotenv.config();
// app.use(cors());
app.use(express.json());
app.use(cors());

app.use(morgan("dev"));

const userRoute = require("./routers/user");
app.use("/api/users", userRoute);

// Define a basic route
app.get("/api/users", (req, res) => {
  res.send("Hello, Express!");
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfull!");
  })
  .catch((err) => {
    console.log(err);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
