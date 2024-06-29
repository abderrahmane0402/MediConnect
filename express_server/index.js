import express, { json } from "express"
import { dbConnect } from "./db.js"
import cors from "cors"

const app = express()
const port = 3000

app.use(cors())

app.use(json())
dbConnect()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err))

app.get("/", async (req, res) => {
  res.send("hi")
})

app.listen(port, () => {
  console.log(`HTTP server running on port ${port}`)
})