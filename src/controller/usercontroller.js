const User=require("../model/user")

const adduser=async(req,res)=>{
    try {
        console.log(req.body);
        const user=new User(req.body);
        await user.save(); 
        return res.status(200).json({"msg":"server is sending data",data:req.body})
       
    } catch (error) {
        
    }
}
const deleteuser=async(req,res)=>{}
const getuser=async(req,res)=>{}
const updateuser=async(req,res)=>{}

module.exports={
    adduser,
    deleteuser,
    getuser,
    updateuser,
}