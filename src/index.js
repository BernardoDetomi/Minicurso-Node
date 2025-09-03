import express from "express";

import userRouter from "./user/user-controller.js"

const app = express();
app.use(express.json());

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
