import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  fromUser: {
    type: String,
    required: true,
  },
  toUser: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: false,
  },
});

export default mongoose.model("Post", postSchema);
