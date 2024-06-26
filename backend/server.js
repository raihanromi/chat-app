const express = require("express")
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectToMongDB = require("./db/connectToMongoDB");
const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes");
const userRoutes = require("./routes/user.routes");
const {app,server } =require("./socket/socket")


const PORT = process.env.PORT || 3000;

dotenv.config();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectToMongDB();
  console.log(`Server  Running on PORT ${PORT}`);
});
