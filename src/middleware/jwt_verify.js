const jwt=require("jsonwebtoken");
const jwtverify=(req,res,next)=>{
    const authtoken=req.headers?.authorization;
    if (!authtoken||!authtoken.startsWith("Bearer ")) {
        return res.status(404).json({msg:"invalid token"})
    }
    const token= authtoken.split(" ")[1];

    try {
        const decode=jwt.verify(token,process.env.jwt_secret)
        req.user=decode;
        next()
    } catch (error) {
        return res.status(404).json({msg:"Unauthorized user"})
    }
}
module.exports=jwtverify