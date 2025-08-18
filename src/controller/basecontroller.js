const userdata=require("../model/user")
const exampleapi= (req,res)=>{
    res.send("hello world"); 
}

const showalluser=(req,res)=>{
    if (req) {
        return res.status(200).json({data:userdata,msg:"data fetched succesfully"})
    }
}
module.exports={
    exampleapi,
    showalluser
}