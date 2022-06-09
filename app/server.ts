import "./db";
import app from "./startup";

const PORT: number = process.env.PORT ? +process.env.PORT : 8080;

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`[server]: started on port ${PORT} 🚀`);
});
