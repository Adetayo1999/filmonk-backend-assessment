import { Router } from "express";
import { createPost, getPosts } from "../controller/post.controller";

const router = Router();

router.get("/getDetails", getPosts);
router.post("/postDetails", createPost);

export default router;
