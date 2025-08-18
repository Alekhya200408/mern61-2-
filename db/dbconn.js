const mongoose=require('mongoose');

const Dbconn=async()=>{
    try {
        await mongoose.connect("mongodb+srv://alekhyaghosh:alekhya1234@cluster0.ywraxg6.mongodb.net/first?retryWrites=true&w=majority&appName=Cluster0")
        console.log("connected to database successfully");
        
    } catch (error) {
        console.log("database connection failed");
        
    }
}
module.exports=Dbconn