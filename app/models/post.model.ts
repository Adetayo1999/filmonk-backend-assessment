import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    aadhar_id: Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", postSchema);

export default Post;
