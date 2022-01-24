import mongoose from "mongoose";

const Todo = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  completed: { type: String, required: true },
});

export default mongoose.model("Todo", Todo);
