const { Schema, model } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique },
  password: { type: String, required: true },
});

module.exports = model("User", schema);
