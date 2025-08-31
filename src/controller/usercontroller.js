
const User = require("../model/user");
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken");
const Register=async(req,res)=>{
    try {
        const{name,email,password}=req.body;
        if (!name||!email||!password) {
           return res.status(400).json({msg:"Please fill all the fields"}) 
        }
        const isexistemail=await User.find({email:email}) 
        if (isexistemail.length>0) {
            return res.status(400).json({msg:"Email already exists"})
        }
        //hashing the password
        const hashpassword= await bcrypt.hash(password,10)
        const newuser=new User({
            name:name,
            email:email,
            password:hashpassword
        });
        await newuser.save(); 
        return res.status(200).json({"msg":"Registration Successfull",Success:true})
       
    } catch (error) {
        res.status(500).json({msg:"internal server error",error:error.message})
    }
}
const Login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        if (!email||!password) {
            return res.status(400).json({msg:"please fill all fields"})
        }
        isexistemail=await User.findOne({email:email})
        if (!isexistemail) {
            return res.status(400).json({msg:"Credentials are not valid"})
        }
        const ispasswordmatch=await bcrypt.compare(password,isexistemail.password)
            if (!ispasswordmatch) {
            return res.status(400).json({msg:"Credentials are not valid"})    
            }
            const token= jwt.sign({id:isexistemail._id},process.env.jwt_secret,{expiresIn:"1d"})
            return res.json({msg:"Login successfully",Success:true,token:token})
    } catch (error) {
        return res.status(500).json({msg:"internal server error",error:error.message})
    }
}
const profile=(req,res)=>{
  try {
    if (!req.user) {
        return res.status(404).json({msg:"Unauthorized person"})
    }
        return res.json({msg:"User Prifile fetched successfully",user:req.user})
  } catch (error) {
        return res.status(500).json({msg:"internal server error",error:error.message})
  }
}

const adduser=async(req,res)=>{
    try {
        console.log(req.body);
        const newuser=new User(req.body);
        await newuser.save(); 
        return res.status(200).json({"msg":"server is sending data",data:req.body})
       
    } catch (error) {
        return res.status(500).json({msg:"internal server error",error:error.message})
    }
}
const getuser=async(req,res)=>{
    try {
        const data= await User.find()
        return res.status(200).json({data:data,msg:"data fetched successfully"})
    } catch (error) {
        return res.status(500).json({msg:"internal server error",error:error.message})
    }
}
const deleteuser=async(req,res)=>{
    try {
        const id=req.user.id;
        const isdelete= await User.findByIdAndDelete(id);
        if (!isdelete) {
            return res.status(404).json({msg:"user not found"})
        } else {
            return res.json({msg:"data deleted successfully",data:isdelete})
        }
    } catch (error) {
        return res.status(500).json({msg:"internal server error",error:error.message})
    }
}
const updateuser=async(req,res)=>{
    try {
        const id=req.params.id;
        const userupdate=await User.findByIdAndUpdate(id,req.body,{new:true})
        if (!userupdate) {
            return res.status(404).json({msg:"user not found"})
        } else {
            return res.json({msg:"data is updated",data:userupdate})
        }
    } catch (error) {
        return res.status(500).json({msg:"internal server error",error:error.message})
    }
}

module.exports={
    adduser,
    deleteuser,
    getuser,
    updateuser,
    Register,
    Login,
    profile
}