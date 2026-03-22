import postModel from "../models/post.model.js";
import uploadFile from "../services/storage.service.js";

const createPost = async (req, res) => {
  try {
    // console.log(req.body)
    // console.log(req.file)

    const result = await uploadFile(req.file.buffer)
    // console.log("Result : " , result) 

    const post = await postModel.create({
      image : result.url,
      caption : req.body.caption
    })

    return res.json({success : true , message : "Post created successfully" , post})
  } catch (error) {
    console.log("Create Post Error : ", error);
  }
};

const fetchAllPost = async (req,res) =>{
  try{
    const post = await postModel.find()

    return res.json({success : true , message : "All Posted fatched Successfully" , post})
  }
  catch(error)
  {
    console.log("Fetch all post error :- ", error)
  }
}
export { createPost , fetchAllPost };
