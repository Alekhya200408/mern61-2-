const express=require("express");
const usercontroller=require("../controller/usercontroller")

const router=express.Router();

router.post("/add-user",usercontroller.adduser)

module.exports=router;