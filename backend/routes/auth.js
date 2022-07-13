import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newuser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    const user = await newuser.save();
    res.status(200).json(user);
    console.log("User Registered Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

//login

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
          res.status(404).json("User not found");
        }
    
        const isPassowrdCorrect = await bcrypt.compare(
            req.body.password,
            user.password
          );
          if (!isPassowrdCorrect) {
            res.status(400).json("Wrong pwd or Username");
          }
          res.status(200).json("success");
        } catch (err) {
          res.status(500).json(err);
        }
});

export default router;
