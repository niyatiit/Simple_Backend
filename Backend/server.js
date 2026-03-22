import express from 'express'
import dotenv from "dotenv";
import connectDB from './config/db.js';
import postRoute from './route/post.route.js';
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())

dotenv.config();
connectDB()
const PORT = process.env.PORT || 3000

app.use("/api/post",postRoute)
app.use("/",(req,res)=>{
    res.json("Backend in running successfully")
}) 


app.listen(PORT, ()=> {
    console.log("server is running ")
})