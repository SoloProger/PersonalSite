import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import router from "./routes/index.js";

const app = express();

const DB_URL = process.env.DB_URL;

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/", router);

async function start() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () =>
      console.log(`App has been start on url http://localhost:${PORT}`)
    );
  } catch (error) {
    throw error;
  }
}

start();
