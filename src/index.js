import dotenv from "dotenv";
import dbConnect from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

dbConnect()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongoDB connection failed!", err);
  });
