import express from "express";
import logger from "morgan";
import postRouter from "../routes/post.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use("/", postRouter);

export default app;
