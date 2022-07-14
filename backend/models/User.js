import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 6,
  },
  profileimg: {
    type: String,
    default: "",
  },
},{timestamps:true});

export default mongoose.model("User", UserSchema);
