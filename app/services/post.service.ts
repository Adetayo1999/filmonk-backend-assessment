import Post from "../models/post.model";

class PostService {
  static async createPost(name: string, age: string) {
    let error: any = null;
    let response: any;
    try {
      const post = new Post({ name, age });
      await post.save();
      response = { message: "POST CREATED" };
    } catch (err) {
      error = err;
    }

    return { error, response };
  }

  static async getPosts() {
    let error: any = null;
    let response: any;
    try {
      const posts = await Post.find({});
      response = { message: "SUCCESS", posts };
    } catch (err) {
      error = err;
    }

    return { error, response };
  }
}

export default PostService;
