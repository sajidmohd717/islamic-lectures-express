import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./models/user.model.js";

import UserRoutes from "./routes/user.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", UserRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/islamic-series")  //this is the database
  .then(() => {
    console.log("connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3001, () => {
  console.log("server is running");
});
