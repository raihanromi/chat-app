const express = require("express")
const router = express.Router()
const getUsersForSidebar = require("../controllers/user.controller")
const protectRoute  =require("../middleware/protectRoute")

router.get("/",protectRoute,getUsersForSidebar)



module.exports =router