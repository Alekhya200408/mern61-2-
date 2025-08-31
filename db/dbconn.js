const mongoose=require('mongoose');

const Dbconn=async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("connected to database successfully");
        
    } catch (error) {
        console.log("database connection failed");
        
    }
}
module.exports=Dbconn