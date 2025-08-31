const express=require("express");
const usercontroller=require("../controller/usercontroller")
const jwtverify=require("../middleware/jwt_verify")
const router=express.Router();

router.post("/add-user",usercontroller.adduser)
router.get("/get-user",jwtverify,usercontroller.getuser)
router.delete("/delete-user/",jwtverify,usercontroller.deleteuser)
router.put("/update-user/:id",usercontroller.updateuser)
router.post("/register",usercontroller.Register)
router.post("/login",usercontroller.Login)
router.get("/profile",jwtverify,usercontroller.profile)

module.exports=router;