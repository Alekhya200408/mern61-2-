const express=require("express")
const router=express.Router()
const basecontroller=require("../controller/basecontroller.js")
const verificationmethod=require("../middleware/verificationmethod.js")
const verification = require("../middleware/verificationmethod.js")
router.get("/",verificationmethod,basecontroller.exampleapi)
router.get("/getalluser",basecontroller.showalluser)

module.exports=router