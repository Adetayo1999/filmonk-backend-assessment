import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/myapp");
mongoose.connection
  .once("open", () => {
    // eslint-disable-next-line
    console.log("Database Connection Establised");
  })
  .on("error", (error) => {
    // eslint-disable-next-line
    console.error(`Error: ${error}`);
  });
