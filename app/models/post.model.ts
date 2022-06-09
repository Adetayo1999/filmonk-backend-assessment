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

const Post = mongoose.model<IPost>("post", postSchema);

export default Post;
