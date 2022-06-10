import express, { Response } from "express";
import logger from "morgan";
import postRouter from "../routes/post.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use("/", postRouter);

app.use("*", (_req, res: Response) => {
  res.send({ message: "INVALID ROUTE" });
});

export default app;
