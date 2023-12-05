const express = require('express');
const router = require('./routers');
require("dotenv").config();
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use("/notes", router)

module.exports = app;