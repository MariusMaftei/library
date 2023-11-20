import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    bookType: {
      type: String,
      required: true,
      unique: false,
    },
    color: {
      type: String,
      required: true,
      unique: false,
    },

    title: {
      type: String,
      required: true,
      unique: false,
    },
    subtitle: {
      type: String,
      required: true,
      unique: false,
    },
    description: {
      type: String,
      required: true,
      unique: false,
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
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", postSchema);

export default Post;
