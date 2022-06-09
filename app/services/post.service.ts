import mongoose from "mongoose";
import Post from "../models/post.model";

const PostService = {
  async createPost(name: string, age: number) {
    let postError: any = null;
    let response: any;
    try {
      const aadharID = new mongoose.Types.ObjectId();
      const post = new Post({ aadhar_id: aadharID, name, age });
      await post.save();
      response = { message: "POST CREATED" };
    } catch (err) {
      postError = err;
    }

    return { postError, response };
  },

  async getPosts() {
    let postError: any = null;
    let response: any;
    try {
      const posts = await Post.find({});
      response = { message: "SUCCESS", posts };
    } catch (err) {
      postError = err;
    }

    return { postError, response };
  },
};

export default PostService;
