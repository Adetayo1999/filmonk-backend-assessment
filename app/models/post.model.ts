import mongoose, { Schema } from "mongoose";

interface IPost {
  aadhar_id: Schema.Types.ObjectId;
  name: string;
  age: number;
}

const postSchema = new Schema<IPost>(
  {
    aadhar_id: {
      type: Schema.Types.ObjectId,
      unique: true,
      required: true,
    },
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

// eslint-disable-next-line
postSchema.methods.toJSON = function () {
  const post = this.toObject();
  delete post.__v;
  delete post._id;
  return post;
};

const Post = mongoose.model<IPost>("post", postSchema);

export default Post;
