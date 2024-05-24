import express from "express";
import mongoose from "mongoose";
import authRouter from "./authRouter.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user:user@cluster0.saseabd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    const server = app.listen(PORT, () => {
      const host = server.address().address;
      const port = server.address().port;
      const formattedHost =
        host === "::" || host === "0.0.0.0" ? "localhost" : host;
      console.log(`Server started on http://${formattedHost}:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
