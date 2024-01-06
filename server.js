import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routers/user.js";
import adminRoutes from "./routers/admin.js";

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();
// app.use(cors());
app.use(express.json());
app.use(cors());

app.use(morgan("dev"));

// import { userRoute } from "./routers/user.js";
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

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
