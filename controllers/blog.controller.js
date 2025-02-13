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

export const getSIngleBlog = async(req,res)=>{
    try{
     const {id} = req.params;
     const blg = await Blog.findById(id)
     res.status(200).json({success:true , data :blg})

    }catch(error){
        res.status(500).json({success:false , message:error.message})
    }
}

export const uppdateBlog = async(req,res) =>{
      const blog = req.body
      const {id} = req.params

          if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false , message:"please blog is invalide"})
      }
    try{
  
      const uppdateBlog = await Blog.findByIdAndUpdate(id , blog , {new:true})
      res.status(200).json({success:true , data : uppdateBlog})

    }catch(error){
        res.status(500).json({success:false , messaege:error.message})
    }
}

export const deleteBlog = async(req,res)=>{
    try{
        const {id} = req.params
         await Blog.findByIdAndDelete(id)
     res.status(200).json({success:true , messaege:"blog succesfuly deleded"})

    }catch(error){
        res.status.json({success:false , message:error.message})
    }
}