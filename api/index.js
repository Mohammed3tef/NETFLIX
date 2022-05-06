const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE);
  console.log("db connected");
}

app.listen(8000, () => {
  console.log("Backend server is running !");
});
