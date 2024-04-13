const express = require("express");
const dotenv = require("dotenv");
const connectToMongDB = require("./db/connectToMongoDB");
const authRoutes = require("./routes/auth.routes");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectToMongDB();
  console.log(`Server  Running on PORT ${PORT}`);
});
