const mongoose = require("mongoose");
require("dotenv").config();

const db = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error);
  }
};

module.exports = db;