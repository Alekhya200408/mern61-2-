const verification=(req,res,next)=>{
    if (req.query.isvalid) {
        next()
    }else{
    res.status(400).send("invalid verification")
    }
}
module.exports=verification