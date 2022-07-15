import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const newpost = new Post(req.body);
  try {
    const post = await newpost.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatepost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatepost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(400).json("You can update own post only!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("post deleted successfully!");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(400).json("You can Delete your Posts Only!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getpost = await Post.findById(req.params.id);
    res.status(200).json(getpost);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const username = req.query.username;
  const catname = req.body.catt;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catname) {
      posts = await Post.find({
        categories: {
          $in: [catt],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(console.error);
  }
});

export default router;
