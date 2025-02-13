import mongoose from "mongoose";
import Blog from "../models/blog.model.js";


 export const createBlog = async(req , res) =>{
     const blog = req.body
    

    const newBlog = new Blog(blog)

    try{
     await newBlog.save();
     res.status(200).json({success:true , data: newBlog})
    }catch(error){
        res.status(500).json({ success:false , message: error.message})
    }
}

export const getBlogs = async(req , res) =>{
    try{
    const blog = await Blog.find({})
    res.status(200).json({success:true , data : blog})
    }catch(error){
      res.status(500).json({success:false , message:error.message})
    }
} 