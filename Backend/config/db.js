import mongoose from 'mongoose'

const connectDB = async () =>{

    try{
        const database_connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log("✅ Database connection successfully")
    }
    catch(error)
    {
        console.log("Connection Failed 😭" , error)
    }
} 

export default connectDB