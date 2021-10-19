import mongoose from "mongoose";
const { Schema, model } = mongoose;

const Todo = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
});

export default model("Todo", Todo);
