import express from "express";
import Category from "../models/Category.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const newcat = new Category(req.body);
  try {
    const saveCategory = await newcat.save();
    res.status(200).json(saveCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const getCategories = await Category.find();
    res.status(200).json(getCategories);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
