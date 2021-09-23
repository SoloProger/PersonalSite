const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const PORT = config.get("port") || 5000;
const URI = config.get("mongoUri");

const app = express();

// app.use('/api/auth', require('./routes/auth.routes'));

async function start() {
  try {
    await mongoose.connect(URI);
    app.listen(PORT, () =>
      console.log(`Приложение запущенно на ${PORT} порту`)
    );
  } catch (error) {
    console.log(`Ошибка сервера ${error.message}`);
    process.exit(1);
  }
}

start();
