const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE);
}


app.use(express.json())
app.use("/api/auth", authRoute);

app.listen(8000, () => {
  console.log("Backend server is running !");
});