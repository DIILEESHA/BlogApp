import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";

dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use("/auth", authRoute);

mongoose
  .connect(process.env.MONGO, { useNewUrlParser: true })
  .then(() => {
    console.log("Mongo connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen("5000", (req, res) => {
  console.log("Backend running port 5000");
});
