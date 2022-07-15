import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";
import categoryRoute from "./routes/categories.js";
import multer from "multer";

dotenv.config();
const app = express();

//middlewares
app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

mongoose
  .connect(process.env.MONGO, { useNewUrlParser: true })
  .then(() => {
    console.log("Mongo connected");
  })
  .catch((err) => {
    console.log(err);
  });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, "web.png");
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has benn Uploaded");
});

app.listen("5000", (req, res) => {
  console.log("Backend running port 5000");
});
