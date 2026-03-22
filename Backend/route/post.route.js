import express from 'express'
import { createPost, fetchAllPost } from '../controller/post.controller.js';
import upload from '../middleware/upload.js';


const postRoute = express.Router();

postRoute.post('/create-post' , upload.single("image") , createPost)
postRoute.get('/fetch-all-post' , fetchAllPost)

export default postRoute