const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const connectToMongDB = require("./db/connectToMongoDB");
const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes");

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(3000, () => {
  connectToMongDB();
  console.log(`Server  Running on PORT ${PORT}`);
});
