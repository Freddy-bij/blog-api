import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db.js"
import blogRouter from "./routes/blog.route.js"



dotenv.config()
const app = express()
app.use(express.json())
app.use("/api/blogs" , blogRouter)
const PORT = process.env.PORT || 4000

app.listen(PORT, async () => {
    await connectDB()
    console.log(`server running in https://locahost:${PORT}`)
})
