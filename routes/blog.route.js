import express from "express"
import { createBlog, deleteBlog, getBlogs, getSIngleBlog, uppdateBlog } from "../controllers/blog.controller.js"


const router = express.Router()

router.post("/" , createBlog);
router.get("/" , getBlogs);
router.get("/:id" , getSIngleBlog);
router.put("/:id" ,uppdateBlog);
router.delete("/:id" , deleteBlog)

export default router