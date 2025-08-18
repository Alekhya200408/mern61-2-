const express=require("express")
const baseRouter=require("./src/route/baseRouter")
const verification=require("./src/middleware/verificationmethod")
const Dbconn=require("./db/dbconn")
const userrouter=require("./src/route/userrouter")
const app=express()

app.use(express.json())
app.use(baseRouter)
app.use(userrouter)
app.get("/profile/:name",verification,(req,res)=>{
    res.send("Hello "+req.params.name)
})
Dbconn().then(()=>{
app.listen(4000,()=>{
   console.log("server is running on port http://localhost:4000/ ");
    
})
})

