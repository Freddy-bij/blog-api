import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connection string :${conn.connection.host}`)

    }catch(error){
      console.error(error.message) 
    }
    
}