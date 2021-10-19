import express from "express";
import mongoose from "mongoose";
import router from "./routes/router.js"

const app = express();
const PORT = 5000;
const DB_URL = `mongodb+srv://admin:admin@cluster0.w9heg.mongodb.net/personSiteDB?retryWrites=true&w=majority`;

app.use(express.json());
app.use('/todo', router);

async function startServer() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () =>
      console.log(`App has started on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log(err);
  }
}

startServer();
