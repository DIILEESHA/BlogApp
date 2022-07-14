import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      required: true,
      type: String,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("post", postSchema);
