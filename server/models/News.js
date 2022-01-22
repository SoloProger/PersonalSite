import mongoose from "mongoose";

const News = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  publish: { type: Date, default: Date.now },
});

export default mongoose.model("News", News);
