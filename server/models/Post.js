import mongoose from "mongoose";
const { Schema, model } = mongoose;

const Post = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  btnText: { type: String, required: true },
});

export default model("Post", Post);
