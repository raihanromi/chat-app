const express = require("express");
const dotenv =require("dotenv")
const app = express();

dotenv.config()

const PORT=process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("server is ready")
})

app.listen(3000, () => {
  console.log(`Server  Running on PORT ${PORT}`);
});
