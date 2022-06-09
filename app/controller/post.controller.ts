import { Request, Response } from "express";
import PostService from "../services/post.service";
import { validatePost } from "../validations/post.validation";

interface TypedRequestBody<T> extends Request {
  body: T;
}

export const createPost = async (
  req: TypedRequestBody<{ name: string; age: number }>,
  res: Response
) => {
  try {
    const { name, age } = req.body;
    const { error } = validatePost(name, age);
    if (error) {
      return res.status(400).send({ message: "Invalid details", error });
    }
    const { postError, response } = await PostService.createPost(name, age);
    if (postError) {
      return res
        .status(500)
        .send({ message: "Something went wrong try again" });
    }
    return res.status(201).send(response);
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Something went wrong try again", err });
  }
};

export const getPosts = async (_req: Request, res: Response) => {
  try {
    const { postError, response } = await PostService.getPosts();
    if (postError) {
      return res
        .status(500)
        .send({ message: "Something went wrong, try again" });
    }
    return res.send(response);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Something went wrong, try again", error });
  }
};
